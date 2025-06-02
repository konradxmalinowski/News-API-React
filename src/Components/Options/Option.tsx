const Option = ({
  label,
  quantity,
  onClick,
}: {
  label: string;
  quantity: number;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="border-[1px] border-white border-solid rounded-[3px] text-white py-1 px-3 w-fit my-3 flex justify-center items-center relative rounded-r-none pr-8 transition-all hover:border-purple2 hover:transition-all cursor-pointer"
    >
      {label}
      <div className="w-5 h-full bg-white text-background3 font-bold text-center absolute right-0 px-0.5 flex justify-center items-center">
        {quantity}
      </div>
    </div>
  );
};

export default Option;
