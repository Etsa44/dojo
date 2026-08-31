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
  const next = () => {
    if (images.length - 1 === position) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };
  const back = () => {
    if (position === 0) {
      setPosition(position + images.length - 1);
    } else {
      setPosition(position - 1);
    }
  };
  const imagePosition = images[position];
  return (
    <div className="flex justify-center items-center gap-4 w-96">
      <Button onClick={back} children={<ChevronLeft className="size-12" />} />
      <img className="size-60" src={imagePosition.imageUrl} alt="" />
      <Button onClick={next} children={<ChevronRight className="size-12" />} />
    </div>
  );
}
