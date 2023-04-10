import { fakeFetch } from "../api/api6";
import { useEffect, useState } from "react";

export const Ques6 = () => {
    const [ taskData, setTaskData ] = useState([])
    const [ heading, setHeading ] = useState("Unarchived Data")

    const getData = async(url) =>{
        try{
            const response = await fakeFetch(url)
            if(response.status === 200){
                setTaskData(response.data.habits)
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getData("https://example.com/api/habits")
    },[])


    const showArchive = () => {
        setHeading("Archived")
        setTaskData(taskData.filter(({archived})=>archived))
    }
    return (
        <>
        <h2>{heading}</h2>
        <ul>
            {
                taskData.map(({title,desc,daysFollowed,daysSkipped},index)=>(<li key={index}><h2>{title}</h2>{desc}<p>DayFollowed:{daysFollowed}</p><p>Days Skipped: {daysSkipped}</p></li>))
            }
        </ul>
        <button onClick={showArchive}>Show Archive</button>
        </>
    )
}