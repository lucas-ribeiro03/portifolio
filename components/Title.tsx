type TitleProps = {
  children: React.ReactNode;
} & React.ComponentProps<"h1">;

const Title = ({ children, ...props }: TitleProps) => {
  return (
    <h1
      className={`text-3xl lg:text-4xl text-purple-700 font-bold ${props.className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
