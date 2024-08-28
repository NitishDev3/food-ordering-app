import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    const {resId} = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const menu = await fetch(MENU_API+resId);
        const json = await menu.json();
        setResMenu(json.data);
        // console.log(json.data);

        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card);

    };

    if(resMenu === null) return <shimmer />;

    const { name, cuisines, costForTwoMessage, sla } = resMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    return (
        <div className="res-page">
            <div className="res-menu">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")}</p>
                <p>{costForTwoMessage}</p>
                <p>{sla.slaString}</p>
                <h2>Menu</h2>
                <ul>
                    {itemCards.map((item) =>
                        (<li key={item.card.info.id}>{item.card.info.name + "- Rs. " + item.card.info.price / 100}</li>)
                    )}
                </ul>
            </div>
        </div>


    )
}

export default RestaurantMenu;