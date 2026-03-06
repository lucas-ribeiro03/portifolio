type InputProps = {
  labelText: string;
  id: string;
  type: "text" | "email";
  placeholder?: string;
};

const Input = ({ labelText, id, type, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="pointer-events-none text-purple-600/80 font-semibold"
        htmlFor={id}
      >
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="px-3 py-2 text-lg rounded-lg border border-zinc-800 focus:border-2 focus:border-purple-700 outline-0"
      />
    </div>
  );
};

export default Input;
