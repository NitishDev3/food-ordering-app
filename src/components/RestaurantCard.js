import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    return (
        <div className="w-[250px] h-[335px] m-[10px] rounded-[7px] border-solid border border-black bg-gray-400 hover:border-[3px]">
            <img className="w-[240px] h-[200px] pt-[5px] px-[5px] rounded-[15px]"
                src={`${RES_IMG_URL}${cloudinaryImageId}`} alt="" />
            <h3 className="font-bold ml-2">{name}</h3>
            <p className="text-xs ml-2">{cuisines.join(", ")}</p>
            <p className="text-xs ml-2">{avgRating} stars</p>
            <p className="text-xs ml-2">{costForTwo}</p>
            <p className="text-xs ml-2">{sla.deliveryTime} minutes</p>
        </div>
    )
}

export default RestaurantCard;