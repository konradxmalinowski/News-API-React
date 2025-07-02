const Option = ({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <a
      onClick={onClick}
      className={`h-7 text-gray-400 cursor-pointer transition-colors hover:text-gray-50 hover:border-b-1 hover:transition-all ${
        isSelected ? 'border-b-1' : ''
      }`}
    >
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </a>
  );
};

export default Option;
