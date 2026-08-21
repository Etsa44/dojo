interface CardFooter {
  children: React.ReactNode;
  className?: string;
}
export default function CardFooter({ children, className }: CardFooter) {
  return (
    <div
      className={`w-full p-4 border-t border-gray-300 bg-gray-200/25 ${className}`}
    >
      {children}
    </div>
  );
}
