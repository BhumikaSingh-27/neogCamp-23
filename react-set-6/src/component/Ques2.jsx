import { fakeFetch } from "../api/api2";
import { useEffect, useState } from "react";

export const Ques2 = () => {
    const [ taskData, setTaskData ] = useState([]);

    const getData = async (url) => {
        try{
                const {status , data} = await fakeFetch(url);
                // console.log(status)
                // console.log(data)
                if(status === 200){
                    setTaskData(data.todos)
                }
                
        } catch (e) {
            console.log(e)
        }
    }
    // console.log(taskData)

useEffect(()=>{
    getData("https://example.com/api/todos")
},[])

    return (
        <>
        <ul>
        {
            taskData.map(({title, desc,todos},index)=>(<li key={index}><h1>{title} : {desc} </h1><OrderedList todo={todos} /></li>))
        }
        </ul>
        </>
    )
}

const OrderedList =( {id,todo}) =>{
    return (
        <>
        <ol>
        {
            todo.map((item,index)=> (<li key={index}>{item}</li>  ))
            
        }
        </ol>
        <hr/>
        </>
    )
}