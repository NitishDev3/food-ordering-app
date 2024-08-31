import { useState } from "react";
import MenuItemList from "./MenuIteamList";

const ResMenuCategory = ({ data }) => {

    const { itemCards } = data?.card?.card;

    const [arrow, setArrow] = useState("🔽")

    console.log(itemCards)

    const show = () => {
        (arrow === "🔽") ?
            setArrow("🔼") : setArrow("🔽")
    }

    return (
        <div>
            <div
                className="flex justify-between bg-gray-300 m-1 p-1 shadow-lg border-b-[0.5px] border-gray-400 cursor-pointer rounded-md"
                onClick={() => {
                    show();
                }}
            >
                <span className="font-semibold">{data.card.card.title} ({itemCards.length})</span>
                <span>{arrow}</span>
            </div>
            <div>
                { 
                (arrow === "🔼") ? <MenuItemList item={itemCards}/> :<></>}
                
            </div>

        </div>
    )
}

export default ResMenuCategory;