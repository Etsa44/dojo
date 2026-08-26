import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

interface CarouselProps {
  images: ImageData[];
}
interface ImageData {
  id: number;
  name: string;
  imageUrl: string;
}
export default function Carousel({ images }: CarouselProps) {
  const [position, setPosition] = useState(0);
  const right = () => {
    setPosition(position + 1);
  };
  const left = () => {
    setPosition(position - 1);
  };
  let first = images[position];

  return (
    <div className="flex justify-center items-center">
      <Button onClick={left} children={<ChevronLeft className="size-12" />} />
      <img className="size-60" src={first.imageUrl} alt="" />
      <Button onClick={right} children={<ChevronRight className="size-12" />} />
    </div>
  );
}
