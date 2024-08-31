import { useParams } from "react-router-dom";
import useFetchResMenu from "../utils/useFetchResMenu";
import Shimmer from "./Shimmer";
import ResMenuCategory from "./ResMenuCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resMenu = useFetchResMenu(resId);

    if (resMenu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, sla } = resMenu?.cards[2]?.card?.card?.info;

    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    const category = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // console.log(category)

    return (
        <><div className="flex justify-center p-5 m-auto w-6/12 bg-gray-100">
            <div className="flex w-full justify-between">
                <h1 className="font-bold text-[40px]">{name}</h1>
                <div className="">
                    <p>{cuisines.join(", ")}</p>
                    <p>{costForTwoMessage}</p>
                    <p>{sla.slaString}</p>
                </div>
            </div>
            
        </div>
        <div className="flex justify-center"><h2 className="font-bold text-[25px]">MENU</h2></div>
        
            <div className="w-7/12 m-auto">
                {category.map((c) => <ResMenuCategory key={c.card.card.title} data={c} />)}
            </div>
        </>



    )
}

export default RestaurantMenu;