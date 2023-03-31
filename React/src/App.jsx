import { useState } from 'react'
import './App.css'
import { Greeting } from "./Greeting"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <h1>Greetings!</h1>
      <Greeting name="Bhumika" />
      </div>
    </div>
  )
}

export default App
