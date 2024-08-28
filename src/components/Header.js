import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"


const Header = () => {
    const [btnname, setBtnName] = useState("LogIn")
    const [loginCol, setLoginCol] = useState("rgb(53, 164, 53)")

    const statusOnline = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-container">
                <ul>
                    <li>Status: {statusOnline? "🟢" : "🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li><Link to={"/"}>Cart</Link></li>
                    <button
                        className="login-btn"
                        style={{ backgroundColor: loginCol }}
                        onClick={() => {
                            if (btnname == "LogIn") {
                                setBtnName("LogOut")
                                setLoginCol("rgb(220, 33, 33)")
                            }
                            else {
                                setBtnName("LogIn")
                                setLoginCol("rgb(53, 164, 53)")
                            }
                        }
                        }>

                        {btnname}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;