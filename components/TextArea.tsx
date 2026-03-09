"use client";

import React from "react";

type TextAreaProps = {
  id: string;
  placeholder: string;
  labelText: string;
} & React.ComponentProps<"textarea">;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, placeholder, labelText, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className="pointer-events-none text-purple-600/80 font-semibold"
        >
          {labelText}
        </label>
        <textarea
          placeholder={placeholder}
          ref={ref}
          id={id}
          className="px-3 py-2 text-lg rounded-lg border border-zinc-800 focus:border-2 focus:border-purple-700 outline-0"
          {...props}
        ></textarea>
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
