import { useState } from 'react'
import './App.css'
import { Greeting } from "./Greeting"
import { ProductCard } from "./components/ProductCard"
import { ToDo } from "./components/ToDo"
import { ColorPicker } from './components/ColorPicker'

function App() {
  // const [count, setCount] = useState(0)
  const todoItems = [
    {
      id: 1,
      title: 'Complete practice set',
      description: 'Practice set 1 of React',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Attend revision session',
      description: 'Revision session of React',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Watch recording',
      description: 'Live session recording of React',
      isCompleted: true,
    },
    {
      id: 4,
      title: 'Attend DSH',
      description: 'Doubt Solving Hours of React',
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Complete practice set',
      description: 'Practice set 2 of React',
      isCompleted: false,
    },
  ]

  const colors = {
    red : '#EE4B2B',
    blue : '#89CFF0',
    green : '#7FFFD4'
  }

  return (
    <div className="App">
      <div>
      <h1>Greetings!</h1>
      <Greeting name="Bhumika" />
      <ProductCard name={"Pen"} price={"10"}/>
      <hr />
      <ToDo items={todoItems} />
      <hr />
      <ColorPicker color={colors} />
      </div>
    </div>
  )
}

export default App
