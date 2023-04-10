import { useEffect, useState } from "react"
import { fakeFetch } from "../api/api10"

export const Ques10 = () => {
    const [ userData, setUserData ] = useState([])
    const [ followerCount, setFollowerCount ] = useState(0)
    const [ disable , setDisable ] = useState(false)

    const getData = async(url) => {
        try {
            const {status, data} = await fakeFetch(url)
            
            if(status === 200){
                setUserData(data.profile)
                console.log(data)
            }
            
        }catch (e) {
            console.log(e)
        }
    }

    const updateFollower = () =>{
        setFollowerCount(count => count+1)
        setDisable(true)
    }

    useEffect(()=>{
        getData("https://example.com/api/profile")
    },[])

    return (
        
        <div>
{
    <>
        <h1>{userData.name}</h1>
        <p>
            Age: {userData.age} <br />
            Gender: {userData.gender} <br />
            email: {userData.email} <br />
            occupation: {userData.occupation} <br />
            followers: {userData.followers + followerCount} <br />
            followedBy: {userData.followedBy} <br />
        </p>
    <button disabled={disable} onClick={updateFollower}>Follow {userData.name}</button>
    </>

}
        </div>
    )
}