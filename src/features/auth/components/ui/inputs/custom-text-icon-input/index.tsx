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
    'max-mobile:w-4 max-mobile:h-4 w-6 h-6 text-neutral-content  opacity-70';
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
        'mb-4 laptop:w-[400px] tablet:w-[400px] mobile:w-[300px]  max-mobile:w-[300px] flew flex-col items-center justify-center m-auto '
      }
    >
      {/* // TODO: Gérer le border des input quand la validation est vbonne */}
      <label
        className={
          'input input-bordered laptop:h-[60px] flex items-center  gap-2 bg-neutral w-full laptop:text-lg ' +
          props.className
        }
      >
        <div className="laptop:w-[20px] tablet:w-[20px] mobile:w-[20px]  max-mobile:w-[20px]">
          {props.icon}
        </div>
        <input
          {...field}
          type={pwdtype}
          className={
            'grow text-neutral-content laptop:w-[320px] tablet:w-[320px] mobile:w-[220px]  max-mobile:w-[190px]  '
          }
          placeholder={props.placeholder}
        />

        {props.type === 'password' && (
          <div
            className="laptop:w-[20px] tablet:w-[20px] mobile:w-[20px]  max-mobile:w-[20px]"
            onClick={handleToggle}
          >
            {eyeIcon}
          </div>
        )}
      </label>
      <div className="text-md mt-3  w-full ">
        {props.error && (
          <p role="alert" className="text-red-400    text-center">
            {props.error}
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomTextIconInput;
