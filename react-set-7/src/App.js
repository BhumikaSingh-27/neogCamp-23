import "./App.css";
import { Ques1 } from "./components/Ques1";
import { Ques2 } from "./components/Ques2";
import { Ques3 } from "./components/Ques3";
import { Ques4 } from "./components/Ques4";
import { Ques5 } from "./components/Ques5";

function App() {
  return (
    <div className="App">
      <h2>Ques1</h2>
      <Ques1 /> <hr />
      <h2>Ques2</h2>
      <Ques2 /> <hr />
      <h2>Ques3</h2>
      <Ques3 /> <hr />
      <h2>Ques4</h2>
      <Ques4 /> <hr />
      <h2>Ques5</h2>
      <Ques5 /> <hr />
    </div>
  );
}

export default App;
