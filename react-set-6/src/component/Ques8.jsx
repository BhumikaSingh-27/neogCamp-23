import { fakeFetch } from "../api/api8"
import { useState, useEffect } from "react"


export const Ques8 = () =>{

    const [ userData, setUserData ] = useState({})


    const getUserData = async(url) => {
        try{
            const {status, data } = await fakeFetch(url);
            if(status === 200){
                setUserData(data.profiles)
            }

        } catch(e){
            console.log(e)
        }
    }

    const changeName = () =>{
        setUserData({...userData, name: "Joice"})
    }

    useEffect(()=>{
    getUserData("https://example.com/api/profile")
    },[])

    return (
        <>
        <h1>Profiles</h1>
        {
            <div>
           <p>Name: {userData.name}</p>
           <p>Age: {userData.age}</p>
           <p>Gender: {userData.gender}</p>
           <p>Email: {userData.email}</p>
           <p>Occupation: {userData.occupation}</p>
           </div>
        }
        <p><button onClick={changeName}>Update Name</button></p>
        
        </>
    )
    
}