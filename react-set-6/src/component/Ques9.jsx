import { fakeFetch } from "../api/api9"
import { useState, useEffect } from "react"

export const Ques9 = () => {
    const [ videoData, setVideoData ] = useState({})
    const [ isLabel, setisLabel ] = useState(false)
    
    const getData = async(url) => {
        try {
            const {status, data} = await fakeFetch(url)
            
            if(status === 200){
                setVideoData(data.videos)
                // console.log(data)
            }
            
        }catch (e) {
            console.log(e)
        }
    }
const showLabel = () => {
    setVideoData({...videoData, label: "Self Motivation"})
    setisLabel(true)
}
    useEffect(()=>{
        getData("https://example.com/api/getvideo")
    },[])

    return (
        <>
         {
            <>
            <img src={videoData.thumbnail} alt="" />
            <h1>{videoData.title}</h1>
            <p>view: {videoData.views}</p>
    
            <p>likes: {videoData.likes}</p>
           { isLabel && <label> Label:{videoData.label}</label>}

          <p><button onClick={showLabel}>Add Label</button></p>
            
            </>
        }

    
        </>
    )
}