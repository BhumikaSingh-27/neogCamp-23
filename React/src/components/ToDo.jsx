export const ToDo = ({items})=>{
    return (
        <>
        <ul>

    {
        items.map(({id,title,despcription,isCompleted})=>{
            return (
                <div key={id}>
                    <li style={{color: isCompleted ? "green" : "red"}}><h3>{title}</h3>
                    <p>{despcription}</p>
                    </li>
                </div>
            )
        })
    }
        </ul>
    
        </>
    )
}