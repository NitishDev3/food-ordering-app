import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import cartImg from "../utils/cart.png"

const Header = () => {
    const [btnname, setBtnName] = useState("LogIn");
    const [btCol, setBtCol] = useState("bg-green-700");

    const statusOnline = useOnlineStatus();

    return (
        <div className="flex justify-between bg-gray-900 shadow-md w-full z-100">
            <div className="logo-container">
                <img className="w-24 m-1 rounded-lg" src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex m-5 text-white">
                    <li className="px-2">Status: {statusOnline ? "🟢" : "🔴"}</li>
                    <li className="px-2"><Link to={"/"}>Home</Link></li>
                    <li className="px-2"><Link to={"/grocery"}>Grocery Store</Link></li>
                    <li className="px-2"><Link to={"/about"}>About</Link></li>
                    <li className="px-2"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-2"><Link to={"/"}><img src={cartImg} className="w-6"></img></Link></li>
                    <li className="px-2"><button
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
                </ul>
            </div>
        </div>
    )
}

export default Header;