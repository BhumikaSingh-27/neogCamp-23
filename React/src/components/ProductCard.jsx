export const ProductCard = ({name, price})=>{
    return (
        <div>
            <h3>Product details</h3>
            <p style={{fontWeight:"bold",color:"blue"}}>Name: {name} </p>
             style={{color:"red", fontStyle:"italics"}}<p>Price:{price}</p>
        </div>
    )
}