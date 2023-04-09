import { useEffect, useState } from "react"
import { fakeFetch } from "../api/api1"

export const Ques1 = () => {
    const [ data, setData ] = useState([])
    const [ filArr, setFilArr ] = useState([])

    const getData = async (url) => {
        try{
            const response = await fakeFetch(url)
            if( response.status === 200 ){
                setData(response.data.products)
            }
        } catch(e)
        {
            console.log(e)
        }
    }
const clickHandler = (event) => {
    console.log(event.target.innerText)
    setFilArr(data.filter(({name})=> name === event.target.innerText))
}
    useEffect(()=>{
        getData('https://example.com/api/products')
    },[])

    return (
        <div>
            <ul>
                <button onClick={clickHandler}>Shoes</button>
                <button onClick={clickHandler}>Tshirt</button>
                <button onClick={clickHandler}>Trekking Bag</button>
                {
                    filArr.map(({name,price,desc,src}) => <li><img src={src} alt="" width="100px" height="100px" /><h1>
                        {name}</h1><p>Price: {price}</p><p>{desc}</p></li>)
                }
            </ul>
        </div>
    )
}