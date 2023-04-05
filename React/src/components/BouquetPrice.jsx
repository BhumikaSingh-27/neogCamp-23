export const BouquetPrice = ({bouquet}) =>{

    return (
        <div>
            {
                bouquet.map(({id,flowers,price})=>{
                    return flowers.map((phool)=> phool === "rose" && (<p key={id}>Price of bouquet with roses : {price}</p>))
                })
            }
        </div>
    )
}