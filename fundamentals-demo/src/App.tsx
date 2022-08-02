import "./App.css";
import { Application } from "./components/application/Application";
import { Counter } from "./components/counter/Counter";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={["HTML", "CSS"]} />
      <Counter />
    </div>
  );
}

export default App;
