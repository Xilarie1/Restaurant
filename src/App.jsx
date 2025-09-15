import "./App.css";
import { Meny } from "./data/Meny";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <Menu dishes={Meny} />
    </>
  );
}

export default App;
