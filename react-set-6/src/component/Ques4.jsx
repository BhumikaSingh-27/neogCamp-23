import { useEffect,useState } from "react";
import { fakeFetch } from "../api/api4";

export const Ques4 = () => {
    const [videoData, setVideoData ] = useState([]);


        const getVideoData = async(url) => {
            try {
                const {status,data } = await fakeFetch(url)
                if (status === 200){
                    setVideoData(data.videos)
                }
            } catch (e){
                console.log(e)
            }
        }
const deleteHandler =()=>{
    let [ first, ...rest]  = videoData
    setVideoData(rest)
    // console.log(first)
    // console.log(rest)
  
}
    useEffect(()=>{
        getVideoData("https://example.com/api/videos")
    },[])

    return (
        <div style={{display: "block", margin:"auto"}}>
        <ul >
            {
                videoData.map(({title,thumbnail, views,likes},index)=><li key={index} style={{display: "inline"}}><img src={thumbnail} alt="" /><figcaption>{title} <p>views:{views}<br />Likes: {likes}</p></figcaption></li>)
            }
        </ul>
        <button onClick={deleteHandler}>Delete Video</button>
      </div>
    )
}