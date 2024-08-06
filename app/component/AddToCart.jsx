import React from 'react'
import { useSelector } from 'react-redux'
import Deleteformcart from './Deleteformcart'
import BuyNow from './BuyNow'

const AddToCart = () => {
  const CartItems = useSelector((state) => state.counter.items)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {CartItems.length > 0 ? (
          CartItems.map((product, index) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
              <img src={product.image} alt="Product Image" className="w-[250px] h-[250px] object-contain rounded-md" />
              <div className="flex-grow mt-4">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
              </div>
              <div className="items-baseline">
                {/* work start from here to increase and delete */}
                <Deleteformcart product={product} />
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold">${product.price * product.quantity}</p>
                <BuyNow/>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center mt-[6rem] text-2xl font-bold  h-[80vh] text-black col-span-1 md:col-span-2 lg:col-span-3">
            No items were added to the cart.
          </h3>
        )}
      </div>
    </div>
  )
}

export default AddToCart
