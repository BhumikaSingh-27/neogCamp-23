const getAllProducts = () => {
    let res = fetch("..../products")
    let data = res.json()
    return data.products
}
const getAllProductsOfCart = (userId) => {
    let res = fetch("..../products")
}
const getAllProductsOfWishlist = (userId) => {
    let res = fetch("..../products")
}