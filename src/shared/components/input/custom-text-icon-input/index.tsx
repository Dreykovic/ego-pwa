import { ReactNode } from 'react';
import {
  useController,
  UseControllerProps,
  FieldValues,
} from 'react-hook-form';

type CustomTextIconInputProps<T extends FieldValues> = {
  className: string;
  icon: ReactNode;
  type: string;
  placeholder: string;
  error?: string;
} & UseControllerProps<T>;

const CustomTextIconInput = <T extends FieldValues>(
  props: CustomTextIconInputProps<T>,
) => {
  const { field } = useController(props);

  return (
    <div className={'mb-4  flew flex-col items-center' + props.className}>
      <label className="input input-bordered lg:h-[60px] flex items-center gap-4 bg-neutral w-full lg:text-lg">
        <div>{props.icon}</div>

        <input
          {...field}
          type={props.type}
          className="grow text-neutral-content bg-primary"
          placeholder={props.placeholder}
        />
      </label>
      <div className="text-md mt-1 bg-neutral w-[200px]">
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

export default CustomTextIconInput;
