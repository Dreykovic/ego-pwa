import { PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
// import './phone-input.css';

import {
  useController,
  UseControllerProps,
  FieldValues,
} from 'react-hook-form';

type CustomTextIconInputProps<T extends FieldValues> = {
  // phone: string;
  // setPhone: (phone: string) => void;
  className: string;
  placeholder: string;
  error?: string;
} & UseControllerProps<T>;

const CustomPhoneInput = <T extends FieldValues>(
  props: CustomTextIconInputProps<T>,
) => {
  const { field } = useController(props);
  return (
    <div className={'mb-4 flew flex-col items-center' + props.className}>
      <PhoneInput
        defaultCountry="tg"
        {...field}
        className={
          'input input-bordered lg:h-[60px] flex items-center gap-4 bg-neutral w-full lg:text-lg' +
          props.className
        }
        inputClassName="grow text-neutral-content"
        placeholder={props.placeholder}
      />
      <div className="text-md mt-1 bg-neutral">
        {props.error && (
          <p role="alert" className="text-error">
            {props.error}
          </p>
        )}
        {/* <p>{fieldState.isTouched && "Touched"}</p>
        <p>{fieldState.isDirty && "Dirty"}</p>
        <p>{fieldState.invalid ? "Invalid" : "Valid"}</p> */}
      </div>
    </div>
  );
};
export default CustomPhoneInput;
