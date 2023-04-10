import { fakeFetch } from "../api/api7"
import { useEffect,useState } from "react"

export const Ques7 = () => {

    const [ projectData, setProjectData ] = useState([])
    const [filData, setFilData ] = useState("")
    const [heading, setHeading ] = useState(false)

    const getProjectDetails = async(url) => {
        try{
            const {status, data} = await fakeFetch(url)
            // console.log(data)

            if( status === 200){
                setProjectData(data.projects)
            }
            // console.log((projectData))

        }catch (e){
            console.log(e)
        }
    }

    const showProjectDetails = (title) => {
     const showFilteredProject =  projectData.find((project)=> project.title === title)

     setFilData(showFilteredProject)
     setHeading(true)
    //  console.log(showFilteredProject)

    }

    useEffect(()=>{
        getProjectDetails("https://example.com/api/projects")
    },[])

    return (
        <>
        <h1>Projects</h1>
        <ul>
            {
                projectData.map((project,index)=>(<li key={index}><p><b>Name:</b> {project.title}<br /><b>Description:</b> {project.description} </p>
                <button onClick={()=>showProjectDetails(project.title)}>Show Details</button></li>))
            }
        </ul>
        
        
       { heading &&

            <div>
               
            <h2>Product Details:</h2>
             <h3>Title: {filData.title}</h3>
             <p>Description: {filData.description}</p> 
             <p>Technologies: {filData.technologies}</p> 
             <p>Completed: {filData.completed.toString()}</p>
             </div>
            }
        
        </>
    )
}