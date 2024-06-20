import React, { useState } from 'react';
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';
import { Select } from 'react-daisyui';

interface Option {
  name: string;
  value: string;
}

interface SelectBoxProps {
  labelTitle: string;
  labelDescription?: string;
  defaultValue?: string;
  containerStyle: string;
  placeholder: string;
  labelStyle: string;
  options: Option[];
  updateType: string;
  updateFormValue: (value: { updateType: string; value: string }) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  labelTitle,
  labelDescription,
  defaultValue,
  containerStyle,
  placeholder,
  labelStyle,
  options,
  updateType,
  updateFormValue,
}) => {
  const [value, setValue] = useState<string>(defaultValue || '');

  const updateValue = (newValue: string) => {
    updateFormValue({ updateType, value: newValue });
    setValue(newValue);
  };

  return (
    <div className={`inline-block ${containerStyle}`}>
      <label className={`label ${labelStyle}`}>
        <div className="label-text">
          {labelTitle}
          {labelDescription && (
            <div className="tooltip tooltip-right" data-tip={labelDescription}>
              <InformationCircleIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </label>

      <Select
        className="select select-bordered w-full"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      >
        <option disabled value="PLACEHOLDER">
          {placeholder}
        </option>
        {options.map((o, k) => {
          return (
            <option value={o.value} key={k}>
              {o.name}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectBox;
