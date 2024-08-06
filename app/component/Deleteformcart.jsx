'use client'

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, remove } from "../lib/features/counter/counterSlice"
import { toast } from "react-toastify"


const Deleteformcart = ({ product }) => {

    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(remove(product));
        toast.error("Item Was Deleted From Cart")
    }

    return (
        <div className="flex items-center mt-4">
            <button onClick={() => dispatch(decrement(product.id))} className="bg-red-500 text-white px-2 py-1 rounded mr-2">-</button>
            <span className="text-gray-700">{product.quantity}</span>
            <button onClick={() => dispatch(increment(product.id))} className="bg-green-500 text-white px-2 py-1 rounded ml-2">+</button>
            <button onClick={handleDelete} className="ml-auto bg-red-600 text-white px-4 py-1 rounded">Delete</button>
        </div>
    )
}

export default Deleteformcart