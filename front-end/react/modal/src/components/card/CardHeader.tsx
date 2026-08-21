interface CardHeader {
  children: React.ReactNode;
  className?: string;
}
export default function CardHeader({ children, className }: CardHeader) {
  return (
    <div className={`w-full border-b p-4 border-gray-300 ${className}`}>
      {children}
    </div>
  );
}
