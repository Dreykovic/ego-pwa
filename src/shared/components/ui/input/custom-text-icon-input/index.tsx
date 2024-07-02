import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { ReactNode, useState } from 'react';
import {
  useController,
  UseControllerProps,
  FieldValues,
} from 'react-hook-form';

type CustomTextIconInputProps<T extends FieldValues> = {
  className?: string;
  icon: ReactNode;
  type: string;
  placeholder: string;
  error?: string;
} & UseControllerProps<T>;

const CustomTextIconInput = <T extends FieldValues>(
  props: CustomTextIconInputProps<T>,
) => {
  const iconClassNames =
    'max-sm:w-4 max-sm:h-4 w-6 h-6 text-neutral-content  opacity-70';
  const { field } = useController(props);
  const [pwdtype, setPwdType] = useState<string>(props.type);
  const [eyeIcon, setEyeIcon] = useState<ReactNode>(
    <EyeSlashIcon className={iconClassNames} />,
  );
  const handleToggle = () => {
    if (pwdtype === 'password') {
      console.log('show');
      setEyeIcon(<EyeIcon className={iconClassNames} />);
      setPwdType('text');
    } else {
      setEyeIcon(<EyeSlashIcon className={iconClassNames} />);
      setPwdType('password');
      console.log('hide');
    }
  };
  return (
    <div
      className={
        'mb-4 lg:w-[400px] md:w-[400px] sm:w-[300px]  max-sm:w-[300px] flew flex-col items-center justify-center m-auto '
      }
    >
      {/* // TODO: Gérer le border des input quand la validation est vbonne */}
      <label
        className={
          'input input-bordered lg:h-[60px] flex items-center  gap-2 bg-neutral w-full lg:text-lg ' +
          props.className
        }
      >
        <div className="lg:w-[20px] md:w-[20px] sm:w-[20px]  max-sm:w-[20px]">
          {props.icon}
        </div>
        <input
          {...field}
          type={pwdtype}
          className={
            'grow text-neutral-content lg:w-[320px] md:w-[320px] sm:w-[220px]  max-sm:w-[190px]  '
          }
          placeholder={props.placeholder}
        />

        {props.type === 'password' && (
          <div
            className="lg:w-[20px] md:w-[20px] sm:w-[20px]  max-sm:w-[20px]"
            onClick={handleToggle}
          >
            {eyeIcon}
          </div>
        )}
      </label>
      <div className="text-md mt-3  w-full ">
        {props.error && (
          <p role="alert" className="text-red-400 text-center">
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

export default CustomTextIconInput;
