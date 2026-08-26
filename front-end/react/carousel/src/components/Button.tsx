interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} type="button" className="cursor-pointer">
      {children}
    </button>
  );
}
