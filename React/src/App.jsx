import { useState } from 'react'
import './App.css'
import { Greeting } from "./Greeting"
import { ProductCard } from "./components/ProductCard"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <h1>Greetings!</h1>
      <Greeting name="Bhumika" />
      <ProductCard name={"Pen"} price={"10"}/>
      </div>
    </div>
  )
}

export default App
