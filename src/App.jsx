import { Menu } from "./components/Menu";
import { Meny } from "./data/Meny";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Menu dishes={Meny} />
    </div>
  );
}

export default App;
