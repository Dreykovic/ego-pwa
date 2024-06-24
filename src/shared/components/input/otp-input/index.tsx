import { useEffect, useState, useRef } from 'react';
import {
  useController,
  UseControllerProps,
  FieldValues,
} from 'react-hook-form';

type OtpInputProps<T extends FieldValues> = {
  className: string;
  error?: string;
  otpLength: number;
} & UseControllerProps<T>;

const OtpInput = <T extends FieldValues>(props: OtpInputProps<T>) => {
  const { field } = useController(props);
  const [otp, setOtp] = useState<string[]>(Array(props.otpLength).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    field.onChange(otp.join(''));
  }, [otp, field]);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < props.otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="mb-4 flex flex-col items-center">
      {/* <div className={`grid grid-cols-${props.otpLength}  gap-2 w-full`}> */}
      <div className={`flex items-center justify-around w-full gap-2`}>
        {Array.from({ length: props.otpLength }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`input input-bordered max-sm:w-[30px] w-[40px] bg-neutral text-neutral-content p-1 text-center ${props.className}`}
          />
        ))}
      </div>
      <div className="text-md mt-1 w-full">
        {props.error && (
          <p role="alert" className="text-error text-center">
            {props.error}
          </p>
        )}
      </div>
    </div>
  );
};

export default OtpInput;
