import axios from "axios"

export const FetchProduct = async()=>{
    const res = await axios.get(`https://fakestoreapi.com/products`)
    return res.data
}
export const FetchCatrgory = async()=>{
    const res = await axios.get(`https://fakestoreapi.com/products/categories`)
    return res.data
}