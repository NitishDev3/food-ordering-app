import { useState } from "react";
import MenuItemList from "./MenuIteamList";

const ResMenuCategory = ({ data, show, showItems }) => {

    const { itemCards } = data?.card?.card;

    return (
        <div>
            <div
                className="flex justify-between bg-gray-300 m-1 p-1 shadow-lg border-b-[0.5px] border-gray-400 cursor-pointer rounded-md"
                onClick={() => {
                    showItems(show);
                }}
            >
                <span className="font-semibold">{data.card.card.title} ({itemCards.length})</span>
                <span>🔽</span>
            </div>
            <div>
                {show && <MenuItemList item={itemCards} />}
            </div>

        </div>
    )
}

export default ResMenuCategory;