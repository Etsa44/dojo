interface Card {
  text: string;
}

export default function Card({ text }: Card) {
  return (
    <div className="w-96 text-center bg-stone-200 p-4 rounded-md flex flex-col justify-center items-center gap-4 ">
      <p>{text}</p>
    </div>
  );
}
