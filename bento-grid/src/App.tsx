import "./App.css";
import EighthItemGrid from "./components/EighthItemGrid";
import FifthItemGrid from "./components/FifthItemGrid";
import FirstItemGrid from "./components/FirstItemGrid";
import FourthtemGrid from "./components/FourthtemGrid";
import SecondItemGrid from "./components/SecondItemGrid";
import SeventhItemGrid from "./components/SeventhItemGrid";
import SixthItemGrid from "./components/SixthItemGrid";
import ThirdItemGrid from "./components/ThirdItemGrid";

function App() {
  return (
    <>
      <div>
        <div
          className="grid grid-cols-1 grid-rows-7 grid-flow-col
         md:grid-cols-1 md:grid-rows-7 md:grid-flow-col 
         lg:grid-cols-4 lg:grid-rows-6 gap-4"
        >
          <div className="row-span-3">
            <FirstItemGrid />
          </div>
          <div className="col-span-2 row-span-2">
            <SecondItemGrid />
          </div>
          <div className="row-span-3 col-start-1 row-start-4">
            <FourthtemGrid />
          </div>
          <div className="row-span-2 col-start-2 row-start-3">
            <FifthItemGrid />
          </div>
          <div className="row-span-2 col-start-2 row-start-5">
            <SeventhItemGrid />
          </div>
          <div className="row-span-2 col-start-3 row-start-3">
            <SixthItemGrid />
          </div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-5">
            <EighthItemGrid />
          </div>
          <div className="row-span-4 col-start-4 row-start-1">
            {" "}
            <ThirdItemGrid />
          </div>
        </div>

        <div className="text-[11px] text-center mt-8">
          Challenge by
          <a
            className="pl-1 text-link"
            href="https://www.frontendmentor.io?ref=challenge"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Nina Micle</a>.
        </div>
      </div>
    </>
  );
}

export default App;
