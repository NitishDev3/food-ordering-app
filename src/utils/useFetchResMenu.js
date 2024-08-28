import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useFetchResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    })

    const fetchMenu = async () => {
        const menu = await fetch(MENU_API + resId);
        const json = await menu.json();
        setResInfo(json.data);
        // console.log(json.data);

        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card);
    };
    return resInfo;
}

export default useFetchResMenu;