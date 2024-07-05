/* eslint-disable react/display-name */
import React from "react";

type IProps = {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  accept?: string;
  ref?: any;
  icon?: any;
};

const Input = React.forwardRef<HTMLInputElement, IProps>(
  ({ type, name, label, icon, accept, ...props }, ref) => {
    return (
      <div className="text-white pb-7 border-b border-white mb-11">
        <label
          className="text-white text-base lg:text-[28px] font-normal leading-[150%] font-alexandria mb-6 block"
          htmlFor={name}
        >
          {label}
        </label>
        <div className="relative"  >
          <div className="absolute top-1/2 -translate-y-1/2">{icon}</div>
          <input
            className={`${type === "file" && "hidden"
              } bg-transparent w-full pl-10`}
            type={type}
            ref={ref}
            name={name}
            accept={accept}
            {...props}
          />
          {type === "file" && (
            <div
              onClick={() => {
                if (ref && "current" in ref && ref.current) {
                  ref.current.click();
                }
              }}
              className="ml-10 flex flex-wrap items-center gap-4 justify-between"
            >
              <p className="text-base lg:text-[28px] text-clr_bb font-light leading-[150%]">
                Drag and drop Here (Supported Files .PDF)
              </p>
              <div className="flex items-center gap-7">
                <p>OR</p>
                <button
                  type="button"
                  className="bg-clr_87 text-white text-2xl font-medium font-alexandria leading-[32px] py-2 px-[22px]"
                >
                  Browse
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
