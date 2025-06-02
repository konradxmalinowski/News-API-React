const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`w-full md:w-[51%] max-w-5xl h-auto flex flex-col justify-center items-center gap-8 mb-5  ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
