import { useEffect, useState } from "react"
import { fakeFetch } from "../api/api3"

export const Ques3 = () => {
    const [ data , setData ] = useState([])

const getData = async(url) => {
    try{
        const {status, data} = await fakeFetch(url)
        if(status === 200)
        {
            setData(data.habits)
        }
        
    }catch(e){
        console.log(e)
    }
}
    useEffect(()=>{
        getData("https://example.com/api/habits")
    },[])

    return (
        <>
        <h1>Habit Tracker</h1>
<ul>
{
    data.map(({title,desc,daysFollowed,daysSkipped},index)=>(<li key={index}><h3>{title}:<br />{desc}</h3><p><b>daysFollowed:</b>{daysFollowed}<br/><b>daysSkipped:</b>{daysSkipped}</p><hr /></li>))
}
</ul>
        </>
    )
}