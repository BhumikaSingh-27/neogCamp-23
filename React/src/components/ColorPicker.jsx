export const ColorPicker = ({color})=>{

    const clickHandler =(data)=>{
        const val =data.target.innerHTML ;
        console.log(val)
    }
    return (
        <>
        <button onClick={clickHandler}> Red Color</button>
        <button onClick={clickHandler}> Blue Color</button>
        <button onClick= {clickHandler}> Green Color</button>
        </>
    )
}