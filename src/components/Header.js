import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import cartImg from "../utils/cart.png"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnname, setBtnName] = useState("LogIn");
    const [btCol, setBtCol] = useState("bg-green-700");

    const statusOnline = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    return (
        <div className="flex justify-between bg-gray-900 shadow-md w-full z-50 fixed top-0">
            <div className="logo-container">
                <img className="w-24 m-1 rounded-lg" src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex m-5 text-white">
                    <li className="mx-2">Status: {statusOnline ? "🟢" : "🔴"}</li>
                    <li className="mx-2"><Link to={"/"}>Home</Link></li>
                    <li className="mx-2"><Link to={"/grocery"}>Grocery Store</Link></li>
                    <li className="mx-2"><Link to={"/about"}>About</Link></li>
                    <li className="mx-2"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="mx-4 relative">
                        <Link to={"/cart"}>
                            <div className="w-8 relative">
                                <div className=" absolute bg-sky-200 py-[0.5] px-[3px] rounded-xl ml-[1px]">
                                    <span className="text-xs text-black font-bold">{cartItems.length}</span>
                                </div>
                                <img src={cartImg} className="w-8 h-8" />

                            </div>


                        </Link>
                    </li>
                    <li className="mx-2"><button
                        className={`cursor-pointer border-solid border-2 border-sky-700 rounded-md w-20 h-8 ${btCol}`}
                        onClick={() => {
                            if (btnname == "LogIn") {
                                setBtnName("LogOut");
                                setBtCol("bg-red-700");
                            }
                            else {
                                setBtnName("LogIn");
                                setBtCol("bg-green-700");
                            }
                        }
                        }>
                        {btnname}
                    </button></li>
                    {btnname === "LogOut" ? <Link to={"/updateusername"}><li className="mx-2">{loggedInUser}</li></Link> : ""}
                </ul>
            </div>
        </div>
    )
}

export default Header;