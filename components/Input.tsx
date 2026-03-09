"use client";

import React from "react";

type InputProps = {
  labelText: string;
  id: string;
  type: "text" | "email";
  placeholder?: string;
} & React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, id, type, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label
          className="pointer-events-none text-purple-600/80 font-semibold"
          htmlFor={id}
        >
          {labelText}
        </label>

        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          className="px-3 py-2 text-lg rounded-lg border border-zinc-800 focus:border-2 focus:border-purple-700 outline-0"
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
