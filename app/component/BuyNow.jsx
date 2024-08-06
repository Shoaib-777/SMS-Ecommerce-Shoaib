import { toast } from "react-toastify"

const BuyNow = () => {
    const Buynow = ()=> toast.warn("This Feature Is Currently Unavailable")
    return (<>
        <button onClick={Buynow} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Buy Now</button>
    </>
    )
}

export default BuyNow