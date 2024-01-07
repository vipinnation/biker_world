'use client';
import React from 'react';

type Props = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange?: any;
  startIcon?: React.ReactNode;
  InputProps?: any;
  errors?: any;
};

const InputField: React.FC<Props> = ({ label, type, placeholder, onChange, startIcon, InputProps, errors, name }) => {
  return (
    <div className="flex w-full pb-1">
      <div className="w-full ">
        <label htmlFor={label} className={`text-sm font-semibold px-1 ${errors ? 'text-red-600' : ''}`}>
          {label}
        </label>
        <div className="flex">
          {startIcon ? startIcon : null}
          <input
            type={type}
            className={`w-full -ml-10  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${
              errors ? 'border-red-400' : ''
            }`}
            placeholder={placeholder}
            onChange={onChange}
            {...InputProps}
          />
        </div>
        {errors && errors.type == 'required' ? (
          <p className="text-red-600 mx-1 font-normal text-md">
            <span className="capitalize mr-1 ">{label as any}</span> is required
          </p>
        ) : null}

        {errors && errors.type == 'pattern' ? (
          <p className="text-red-600 mx-1 font-normal text-md">
            <span className="capitalize mr-1 ">{errors.message}</span>
          </p>
        ) : null}
        {errors && errors.type == 'validate' ? (
          <p className="text-red-600 mx-1 font-normal text-md">
            <span className="capitalize mr-1 ">{errors.message}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
