import { useState } from "react";
import { LOGO_URL } from "../utils/constants"


const Header = () => {
    const [btnname, setBtnName] = useState("LogIn")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
                        className="login-btn"
                        onClick={() =>
                            (btnname == "LogIn") ? setBtnName("LogOut") : setBtnName("LogIn")}>
                        {btnname}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;