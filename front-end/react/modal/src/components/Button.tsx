interface Props {
  onClick: () => void;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}
export default function Button({ onClick, label, className, children }: Props) {
  return (
    <button
      className={`cursor-pointer font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
}
