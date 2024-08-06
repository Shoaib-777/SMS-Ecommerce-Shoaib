'use client';
import { IoBagCheckSharp, IoHeartCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { add, addw, removew, toggleLike } from "../lib/features/counter/counterSlice";
import { toast, ToastContainer } from 'react-toastify';

const AddToCartButton = ({ product }) => {
    const dispatch = useDispatch();
    const like = useSelector((state) => state.counter.likes[product?.id] || false);

    if (!product || !product.id) {
        return null;
    }

    const handleClick = () => {
        dispatch(add(product));
        toast.success("Item Is Added To Cart");
    };

    const handleClickWishlist = () => {
        if (like) {
            dispatch(removew(product.id));
            toast.warn('Item Removed From Wishlist');
        } else {
            dispatch(addw(product));
            toast.success('Added To Wishlist');
        }
        dispatch(toggleLike(product.id));
    };

    return (
        <div className="flex justify-between px-1 items-center">
            <button 
                className="bg-black text-white px-4 py-2 mt-1 text-nowrap rounded-lg flex gap-2 justify-center items-center text-center"
                onClick={handleClick}
            >
                Add To Cart<IoBagCheckSharp />
            </button>
            <button onClick={handleClickWishlist}>
                <IoHeartCircleOutline className={`w-10 h-10 ${like ? 'fill-pink-600' : ''}`} />
            </button>
        </div>
    );
};

export default AddToCartButton;
