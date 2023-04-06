import { useState } from "react";

export const DisplaySalary = ({employees}) => {
    const [ showData , setShowData ] = useState("")

    const changeHandler = (e) => {
        setShowData()
        console.log(e.target.value)
    }
    return (
        <div>
   <label>Enter a salary:</label><input type="number" onChange={changeHandler} />  
        
        {
            showData && 
                employees.map(({name,age,salary,position})=><p>{name} -- {age}  -- {salary} -- {position} </p>)
            
        }
        </div>
    )
}