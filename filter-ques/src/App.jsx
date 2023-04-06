import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DisplaySalary } from './components/DisplaySalary'


const employees = [
  { name: 'John', age: 30, position: 'Manager', salary: 5000 },
  { name: 'Lisa', age: 25, position: 'Developer', salary: 4000 },
  { name: 'Sarah', age: 28, position: 'Designer', salary: 4500 },
  { name: 'Mark', age: 35, position: 'Engineer', salary: 5500 },
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>example 1</h1>
      <DisplaySalary employees={employees} />  
      </div>
  )
}

export default App
