import "./App.css";
import EighthItemGrid from "./components/EighthItemGrid";
import FifthItemGrid from "./components/FifthItemGrid";
import FirstItemGrid from "./components/FirstItemGrid";
import FourthtemGrid from "./components/FourthtemGrid";
import NinthItemGrid from "./components/NinthItemGrid";
import SecondItemGrid from "./components/SecondItemGrid";
import SeventhItemGrid from "./components/SeventhItemGrid";
import SixthItemGrid from "./components/SixthItemGrid";
import ThirdItemGrid from "./components/ThirdItemGrid";

function App() {
  return (
    <>
      <div>
        <h1 className="underline">Vite + React</h1>
        <div className="grid">
          <FirstItemGrid />
          <SecondItemGrid />
          <ThirdItemGrid />
          <FourthtemGrid />
          <FifthItemGrid />
          <SixthItemGrid />
          <SeventhItemGrid />
          <EighthItemGrid />
          <NinthItemGrid />
        </div>
      </div>
    </>
  );
}

export default App;
