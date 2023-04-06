export const ShowCategory = ({cars}) =>{
    let arr = []
   const obj=  cars.map(({category})=>category).reduce((acc,cur)=>{
        if(!acc[cur]){
            acc[cur] = 1
        }else{
            acc[cur] += 1
        }
        return acc
    },{})
    
    for ( let key in obj){
        arr = [...arr, <li>{key} : {obj[key]}</li>]
    }

    return (
        <div>
            <ul>
                {arr}
            </ul>
        </div>
    )
}