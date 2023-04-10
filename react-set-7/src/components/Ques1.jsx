import { useState } from "react"
import { fakeFetch } from "../api/api1"
import { useEffect } from "react"

export const Ques1 = () => {

const [ weatherData, setWeatherData ] = useState([])
const [ tempVar, setTempVar ] = useState(0)
const getData = async(url) =>{
    try {
        const response = await fakeFetch(url)
        
        if(response.status === 200){
            setWeatherData(response.data)
            setTempVar(response.data.temperature)
        }
        }catch(e){
            console.log(e)

    }
    console.log(tempVar)
}

const toggleValue = (e) => {
    e.target.innerText="Switch to Celcius"
    const cal = tempVar*1.8 + 32
    setTempVar(cal)
}
useEffect(()=>{
    getData("https://example.com/api/weather")
},[])
    return (
        <div>
            <h1>Weather</h1>
            
           {
            <>
            <p>temperature:  {tempVar}</p>
            <p>Humidity: {weatherData.humidity} %</p>
            <p>Wind Speed: {weatherData.windSpeed }Km/h</p>
            </>
           }
           <button onClick={(e)=>(toggleValue)}>Switch to Fahrenheit</button> 
           
        </div>
    )
}