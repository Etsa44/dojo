import { useState } from "react";

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
      <button
        type="button"
        className="px-6 py-4 bg-sky-500 cursor-pointer rounded-md"
        onClick={open}
      >
        Modal
      </button>
      {modalIsOpen && (
        <div>
          <button
            className="px-6 py-4 bg-red-500 cursor-pointer rounded-md"
            onClick={close}
          >
            close
          </button>
          <p className="w-96 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            distinctio debitis velit repudiandae ex error ratione aspernatur
            deserunt? Quas a dolore repellat minus molestiae ab iste sit velit
            cupiditate vero.
          </p>
        </div>
      )}
    </div>
  );
}
