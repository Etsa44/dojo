interface CardContent {
  children: React.ReactNode;
  className?: string;
}
export default function CardContent({ children, className }: CardContent) {
  return <div className={`w-full p-4 ${className}`}>{children}</div>;
}
