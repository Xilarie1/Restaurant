import "./App.css";
import { Meny } from "./assets/Meny";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <Menu dishes={Meny} />
    </>
  );
}

export default App;
