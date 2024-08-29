import { useParams } from "react-router-dom";
import useFetchResMenu from "../utils/useFetchResMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resMenu = useFetchResMenu(resId);

    if(resMenu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, sla } = resMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    return (
        <div className="flex justify-center">
            <div className="res-menu">
                <h1 className="font-bold text-[40px]">{name}</h1>
                <p>{cuisines.join(", ")}</p>
                <p>{costForTwoMessage}</p>
                <p>{sla.slaString}</p>
                <h2>Menu</h2>
                <ol className="list-decimal">
                    {itemCards.map((item) =>
                        (<li key={item.card.info.id}>{item.card.info.name + "- Rs. " + item.card.info.price / 100}</li>)
                    )}
                </ol>
            </div>
        </div>


    )
}

export default RestaurantMenu;