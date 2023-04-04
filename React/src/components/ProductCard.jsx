export const ProductCard = ({name, price})=>{
    return (
        <div>
            <h3>Product details</h3>
            <p style={{fontWeight:"bold", color:"blue"}}> Name: {name} </p>
            <p style={{color:"red", fontStyle:"italics"}}>Price:{price}</p>
        </div>
    )
}