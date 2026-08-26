interface Card {
  children: React.ReactNode;
}
export default function Card({ children }: Card) {
  return <div className="bg-blue-500 p-4">{children}</div>;
}
