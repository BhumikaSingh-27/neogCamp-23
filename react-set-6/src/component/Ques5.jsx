import { useEffect, useState } from "react"
import { fakeFetch } from "../api/api5"

export const Ques5 = () => {

    const [ bakeryData, setBakeryData] = useState([]);

    const getData = async(url) => {
        try {
            const {status, data} = await fakeFetch(url)
            console.log(status,data)
            if (status === 200){
                setBakeryData(data.posts)
            }
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
    const showBakery = ()=>{

        setBakeryData(bakeryData.filter(({category})=> category === "Bakery"))
    }

    useEffect(()=>{
        getData("https://example.com/api/posts")
    },[])

    return (
        <>
        <ul>
            {
                bakeryData.map(({caption,src,views,likes,category},index)=>(<li key={index}><img src={src} alt="" /><figcaption>{caption}</figcaption><p>Likes:{likes}<br />Views:{views}</p></li>))

                
            }
        </ul>
        <button onClick={showBakery}>Show Bakery</button>
        </>
    )
}