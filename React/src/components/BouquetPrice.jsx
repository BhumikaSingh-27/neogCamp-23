export const BouquetPrice = ({bouquet}) =>{

    return (
        <div>
            {
                bouquet.map(({id,flowers,price})=>{
                    return flowers.map((phool)=> phool === "rose" && (<p key={id}>Price of bouquet with roses : {price}</p>))
                })
            }
            <h2>Filter flowers with price above 2000</h2>
            <ol>
            {
                bouquet.filter(({price})=> price>2000).map(({id,flowers})=> flowers.map((ele)=>(<li key={id}>{ele}</li>)))
            }
            </ol>
        </div>
    )
}