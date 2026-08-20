interface Props {
  onClick: () => void;
  label: string;
  className?: string;
}
export default function Button({ onClick, label, className }: Props) {
  return (
    <button
      className={`px-6 py-4 bg-gray-200 rounded-md cursor-pointer font-semibold ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
