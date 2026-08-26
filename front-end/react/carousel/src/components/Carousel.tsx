import { useState } from "react";

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
  const links = images.map((image) => (
    <img
      key={image.id}
      src={image.imageUrl}
      alt={`Photo ${image.name}`}
      className="size-60"
    />
  ));
  return <div className="flex">{links} </div>;
}
