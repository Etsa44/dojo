import Carousel from "./components/Carousel";
import data from "./data/data.ts";
function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Carousel images={data} />
    </div>
  );
}

export default App;
