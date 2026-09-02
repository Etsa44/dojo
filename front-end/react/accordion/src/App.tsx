import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  console.log(open);
  return (
    <div>
      <button onClick={handleClick}>accordion</button>
      {open && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque in
          facere ipsam dolor quos. Nihil earum magni accusantium qui sit quo
          labore facilis dolorum eveniet quisquam expedita est, consectetur
          tempora.
        </p>
      )}
    </div>
  );
}

export default App;
