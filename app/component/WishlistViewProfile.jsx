'use client'
import Link from 'next/link';
import { useSelector } from 'react-redux';

const WishlistViewProfile = () => {
    const wishItems = useSelector((state) => state.counter.itemsw);

  return (
    <>
    <ul>
                                {wishItems.length > 0 ? (
                                    wishItems.map((product) => (
                                <li key={product.id} className="mb-2">
                                    <div className="flex justify-between">
                                        <span>{product.title}</span>
                                        <Link href={'/wishlist'}><button className="text-blue-500">View</button></Link>
                                    </div>
                                </li>
          ))):(<>
            <h3 className="text-center mt-[1rem] text-2xl font-bold  text-black col-span-1 md:col-span-2 lg:col-span-3">
              Your Wishlist Is Empty. <Link href={'/'}><span className='text-red-600 hover:underline'>Add Products</span></Link> 
            </h3>
            </>
          )}
    </ul>
    </>
  )
}

export default WishlistViewProfile
