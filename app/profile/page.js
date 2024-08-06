import { auth, signOut } from '../auth';
import Link from 'next/link';
import WishlistViewProfile from '../component/WishlistViewProfile';

const Profile = async () => {

    let user;
    try {
        const authResult = await auth();
        user = authResult.user;
    } catch (error) {
        console.error('Error during authentication:', error);
        return (
            <div>
                <h2 className='font-bold text-3xl text-center mt-4 mb-4'>
                 Please Login First and try again.
                </h2>
                <Link href={'/login'}>
                    <h2 className='text-red-600 hover:underline cursor-pointer text-center font-bold text-3xl'>
                        Login Here
                    </h2>
                </Link>
            </div>
        );
    }

    if (!user) {
        return (
            <div>
                <h2 className='font-bold text-3xl text-center mt-4 mb-4'>
                    No Profile Found
                </h2>
                <Link href={'/login'}>
                    <h2 className='text-red-600 hover:underline cursor-pointer text-center font-bold text-3xl'>
                        Login Here
                    </h2>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-100">
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-4xl w-full">
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center mb-6 md:mb-0">
                        <img className="w-[150px] h-[150px] rounded-full object-cover border-4 border-blue-500" src={user.img} alt="User Image"/>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">{user.username}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                    <div className="flex-1">
                        <div className="border-b pb-4 mb-4">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Order History</h3>
                            <ul>
                                <li className="mb-2">
                                    <div className="flex justify-between">
                                        <span>Order #1234</span>
                                        <span className="text-gray-500">25th Jul, 2023</span>
                                    </div>
                                    <p className="text-gray-600">Status: Delivered</p>
                                </li>
                                <li className="mb-2">
                                    <div className="flex justify-between">
                                        <span>Order #1233</span>
                                        <span className="text-gray-500">10th Jul, 2023</span>
                                    </div>
                                    <p className="text-gray-600">Status: Pending</p>
                                </li>
                            </ul>
                        </div>
                        <div className="border-b pb-4 mb-4">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Wishlist</h3>
                            <WishlistViewProfile/>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Settings</h3>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
                        </div>
                        <div className='mt-4'>
                            <form action={async () => {
                                        "use server"
                                        await signOut();}}>
                            <button className="bg-red-500 text-white px-7 py-2 rounded">Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        // <div>
        //     <div className='text-3xl font-bold'>
        //         {user.email}
        //     </div>
        //     <form
        //         action={async () => {
        //                 "use server"
        //                 await signOut();}}>
        //         <button className='border border-black text-center'>
        //             Logout
        //         </button>
        //     </form>
        // </div>
    );
};

export default Profile;
