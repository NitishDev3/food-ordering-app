import { clearCart, removeItem } from "../utils/cartSlice";
import MenuItemList from "./MenuIteamList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div className="mt-24 text-center w-6/12 m-auto">
            <h1 className="font-extrabold text-xl ">Cart</h1>
            <button 
            className="bg-black text-white p-2 rounded-lg my-3 text-sm"
            onClick={()=>handleClearCart()}
            >Clear Cart</button>
            <MenuItemList item={cartItems} />
        </div>
    )
}

export default Cart;