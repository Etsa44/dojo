import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/card/Card";

export default function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const open = () => {
    setModalIsOpen(true);
  };
  const close = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 ">
      {!modalIsOpen && <Button onClick={open} label="open modal" />}
      {modalIsOpen && (
        <div className="flex flex-col justify-center items-center gap-4 ">
          <Card
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            distinctio debitis velit repudiandae ex error ratione aspernatur
            deserunt? Quas a dolore repellat minus molestiae ab iste sit velit
            cupiditate vero."
          />
          <Button onClick={close} label="close modal" className="bg-red-500" />
        </div>
      )}
    </div>
  );
}
