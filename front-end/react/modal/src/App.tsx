import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/card/Card";
import CardHeader from "./components/card/CardHeader";
import CardContent from "./components/card/CardContent";
import CardFooter from "./components/card/CardFooter";
import { X } from "lucide-react";

export default function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const open = () => {
    setModalIsOpen(true);
    requestAnimationFrame(() => {
      setModalVisible(true);
    });
  };
  const close = () => {
    setModalVisible(false);
    setTimeout(() => {
      setModalIsOpen(false);
    }, 300);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 ">
      {!modalIsOpen && (
        <Button
          onClick={open}
          label="Open modal"
          className="px-6 py-4 rounded-md text-gray-400 bg-gray-200 transition delay-150 duration-300 ease-in-out hover:text-white hover:bg-green-500 hover:-translate-y-1 hover:scale-110 hover:shadow-md"
        />
      )}
      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-4">
          <Card
            className={`w-96 transition-all duration-700 ease-out hover:shadow-md ${modalVisible ? "scale-100" : "scale-0"}
        `}
          >
            <CardHeader className="flex gap-36">
              <Button onClick={close}>
                <X />
              </Button>
              <h2>Modal</h2>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                officia vel praesentium culpa in et aut excepturi ipsa quisquam
                quasi ipsum quas at modi, nam quis eos reiciendis. Repellendus,
                necessitatibus.
              </p>
            </CardContent>
            <CardFooter>
              <p>Add any footer content</p>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
