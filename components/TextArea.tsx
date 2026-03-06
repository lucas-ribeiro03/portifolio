type TextAreaProps = {
  id: string;
  placeholder: string;
  labelText: string;
};

const TextArea = ({ placeholder, id, labelText }: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="pointer-events-none text-purple-600/80">
        {labelText}
      </label>
      <textarea
        placeholder={placeholder}
        id={id}
        className="px-3 py-2 text-lg rounded-lg border border-zinc-800 focus:border-2 focus:border-purple-700 outline-0"
      ></textarea>
    </div>
  );
};

export default TextArea;
