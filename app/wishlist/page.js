'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removew,toggleLike } from '../lib/features/counter/counterSlice';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Wishlist = () => {
  const wishItems = useSelector((state) => state.counter.itemsw);
  const dispatch = useDispatch();

  const handleDelete = (product) => {
    dispatch(removew(product.id));
    toast.error('Removed From WishList')
    dispatch(toggleLike(product.id));
  };
  const buyNow=()=>{
    toast.error("This Feature Is Currently Unavailable")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">WishList</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {wishItems.length > 0 ? (
          wishItems.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
              <img
                src={product.image}
                alt="Product Image"
                className="w-[250px] h-[250px] object-contain rounded-md"
              />
              <div className="flex-grow mt-4">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
              </div>
              <div className="flex items-baseline mt-4">
                <button onClick={buyNow} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                  Buy Now
                </button>
                <button
                  onClick={() => handleDelete(product)}
                  className="ml-auto bg-red-600 text-white px-4 py-1 rounded"
                >
                  Remove
                </button>
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            </div>
          ))
        ) : (<>
          <h3 className="text-center mt-[6rem] text-2xl font-bold  text-black col-span-1 md:col-span-2 lg:col-span-3">
            No items were added to the WishList. <Link href={'/'}><span className='text-red-600 hover:underline'>View Products</span></Link> 
          </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
