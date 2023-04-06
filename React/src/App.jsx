import { useState } from 'react'
import './App.css'
import { Greeting } from "./Greeting"
import { ProductCard } from "./components/ProductCard"
import { ToDo } from "./components/ToDo"
import { ColorPicker } from './components/ColorPicker'
import { BouquetPrice } from './components/BouquetPrice'
import { ShowCategory } from "./components/ShowCategory"

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

  const bouquet = [
    {
      id: 1,
      flowers: ['rose', 'lily', 'marigold'],
      totalFlowers: 9,
      price: 1400,
    },
    {
      id: 2,
      flowers: ['snapdragon', 'sunflower'],
      totalFlowers: 10,
      price: 3400,
    },
  ]
  const cars = [
    {
      id: 1,
      name: 'supra',
      price: 500000,
      category: 'sports',
    },
    {
      id: 2,
      name: 'A5',
      price: 700000,
      category: 'luxury',
    },
    {
      id: 3,
      name: 'huyara',
      price: 1500000,
      category: 'sports',
    },
    {
      id: 4,
      name: 'agera R',
      price: 3500000,
      category: 'sports',
    },
  ]

  return (
    <div className="App">
      <div>
      <h1>Greetings!</h1>
      <Greeting name="Bhumika" />

      <ProductCard name={"Pen"} price={"10"}/>
      <hr />
      <ToDo items={todoItems} />
      <hr />
      <ColorPicker color={colors} /> <hr />
      <h1>Set 3 ques-6</h1>
      <BouquetPrice bouquet={bouquet}/> <hr />
      <ShowCategory cars={cars} />
      </div>
    </div>
  )
}

export default App
