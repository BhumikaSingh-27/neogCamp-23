import "./App.css";
import { Ques1 } from "./component/Ques1";
import { Ques2 } from "./component/Ques2";
import { Ques3 } from "./component/Ques3";
import { Ques4 } from "./component/Ques4";
import { Ques5 } from "./component/Ques5";
import { Ques6 } from "./component/Ques6";

function App() {
  return (
    <div className="App">
      <h1>Practice set 6</h1>
      <h2>Ques one</h2>
      <Ques1 />
      <hr />
      <Ques2 />
      <h2>Ques3</h2>
      <Ques3 />
      <h2>Ques4</h2>
      <Ques4 /> <hr />
      <h2>Ques 5</h2>
      <Ques5 /> <hr />
      <h2>Ques6</h2>
      <Ques6 />
    </div>
  );
}

export default App;
