type ContainerProps = {
  children: React.ReactNode;
  id: string;
};

const Container = ({ children, id }: ContainerProps) => {
  return (
    <section
      id={id}
      className="py-16 px-4 lg:px-0 flex flex-col gap-8 items-center min-h-screen justify-center lg:w-395 lg:ml-auto *:z-10 overflow-x-hidden"
    >
      {children}
    </section>
  );
};

export default Container;
