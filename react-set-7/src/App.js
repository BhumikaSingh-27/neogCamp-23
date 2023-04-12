import "./App.css";
import { Ques1 } from "./components/Ques1";
import { Ques2 } from "./components/Ques2";
import { Ques3 } from "./components/Ques3";
import { Ques4 } from "./components/Ques4";
import { Ques5 } from "./components/Ques5";
import { Ques6 } from "./components/Ques6";
import { Ques7 } from "./components/Ques7";
import { Ques8 } from "./components/Ques8";
import { Ques9 } from "./components/Ques9";
import { Ques10 } from "./components/Ques10";
import { useState } from "react";

function App() {
  const [state, setState] = useState("Ques1");

  return (
    <div className="App">
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques1")}
      >
        Ques1
      </button>
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques2")}
      >
        Ques2
      </button>
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques3")}
      >
        Ques3
      </button>
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques4")}
      >
        Ques4
      </button>
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques5")}
      >
        Ques5
      </button>
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques6")}
      >
        Ques6
      </button>
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques7")}
      >
        Ques7
      </button>
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques8")}
      >
        Ques8
      </button>
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques9")}
      >
        Ques9
      </button>
      <button
        className="bg-blue-900 text-white rounded-md mx-2 p-2"
        onClick={() => setState("Ques10")}
      >
        Ques10
      </button>
      {(() => {
        switch (state) {
          case "Ques1":
            return <Ques1 />;
          case "Ques2":
            return <Ques2 />;
          case "Ques3":
            return <Ques3 />;
          case "Ques4":
            return <Ques4 />;
          case "Ques5":
            return <Ques5 />;
          case "Ques6":
            return <Ques6 />;
          case "Ques7":
            return <Ques7 />;
          case "Ques8":
            return <Ques8 />;
          case "Ques9":
            return <Ques9 />;
          default:
            return <Ques10 />;
        }
      })()}

      {/* <h2>Ques1</h2>
      <Ques1 /> <hr />
      <h2>Ques2</h2>
      <Ques2 /> <hr />
      <h2>Ques3</h2>
      <Ques3 /> <hr />
      <h2>Ques4</h2>
      <Ques4 /> <hr />
      <h2>Ques5</h2>
      <Ques5 /> <hr />
      <h2>Ques6</h2>
      <Ques6 /> <hr />
      <h2>Ques7</h2>
      <Ques7 /> <hr />
      <h2>Ques8</h2>
      <Ques8 /> <hr />
      <h2>Ques9</h2>
      <Ques9 /> <hr />
      <h2>Ques10</h2>
      <Ques10 /> <hr /> */}
    </div>
  );
}

export default App;
