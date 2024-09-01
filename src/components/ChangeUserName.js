import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const ChangeUserName = () =>{
    const {loggedInUser,setUserName} = useContext(UserContext);
    const [nameValue, setNameValue] = useState(loggedInUser)
    

    return (
        <div className="mt-24 mb-24 w-3/12 m-auto">
            <h1 className="font-bold text-xl mb-5">User Profile</h1>
            <label htmlFor="username" className="mb-3">Enter username to update it.</label>
            <br />
            <input 
            id="username"
            type="text" 
            className="border border-black pl-1 mb-3" 
            value={nameValue}
            onChange={(e)=>setNameValue(e.target.value)}
            />
            <br />
            <button 
            className="bg-black text-white rounded-md w-20 h-8"
            onClick={()=>{setUserName(nameValue)}}
            >Update</button>
        </div>
    )
}

export default ChangeUserName;