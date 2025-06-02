const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center text-xl">{children}</div>
  );
};

export default FormWrapper;
