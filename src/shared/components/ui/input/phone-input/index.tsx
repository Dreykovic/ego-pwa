import {
  useController,
  UseControllerProps,
  FieldValues,
} from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import './phone-input.css';
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
  /**
   *     <div className={'mb-4  flew flex-col items-center' + props.className}>
      <label className="input input-bordered lg:h-[60px] flex items-center gap-4 bg-neutral w-full lg:text-lg">
   */
  return (
    <div
      className={
        'mb-4 lg:w-[400px] md:w-[400px] sm:w-[300px]  max-sm:w-[300px] flew flex-col items-center justify-center m-auto'
      }
    >
      <label
        className={
          'input input-bordered input-accent lg:h-[60px] flex items-center gap-4 bg-neutral w-full lg:text-lg ' +
          props.className
        }
      >
        <PhoneInput
          defaultCountry="tg"
          {...field}
          inputClassName=" text-neutral-content flex-grow"
          placeholder={props.placeholder}
        />
      </label>
      <div className="text-md mt-1 ">
        {/* TODO: Géré l'uniformité avec les tect input */}
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
export default CustomPhoneInput;
