interface Card {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: Card) {
  return (
    <div
      className={`text-center shadow-sm rounded-md flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}
