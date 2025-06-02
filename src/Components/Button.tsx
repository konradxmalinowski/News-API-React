const Button = ({
  label,
  handleClick,
  className,
}: {
  label: string;
  handleClick: () => void;
  className?: string | undefined;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center gap-1 text-[17px] font-bold -tracking-normal bg-purple1 border-2 border-purple2 rounded-2xl shadow-[0_5px_0] shadow-purple2 transition-all px-5 py-2.5 hover:scale-105 hover:transition-all active:translate-y-2 active:shadow-none ${
        className ?? ''
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
