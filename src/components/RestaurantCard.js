import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    return (
        <div className="w-[250px] h-auto m-[10px] rounded-[7px] bg-gray-200 hover:bg-gray-300">
            <img className="w-[240px] h-[200px] ml-1 pt-[5px] px-[5px] rounded-[15px]"
                src={`${RES_IMG_URL}${cloudinaryImageId}`} alt="" />
            <h3 className="font-bold ml-2">{name}</h3>
            <p className="text-xs ml-2">{cuisines.join(", ")}</p>
            <p className="text-xs ml-2">{avgRating} stars</p>
            <p className="text-xs ml-2">{costForTwo}</p>
            <p className="text-xs ml-2 pb-3">{sla.deliveryTime} minutes</p>
        </div>
    )
}

export const PromotedRestaurantCard = () => {
    return (props) => {
        // console.log(props.resData.info.aggregatedDiscountInfoV3.header +" "+ props.resData.info.aggregatedDiscountInfoV3.subHeader)

        return (
            <div className="">
                <div className="relative">
                    <label
                        className="absolute m-2 bg-black text-white h-[30px] items-center px-2 rounded-r-lg"
                    >{props?.resData?.info?.aggregatedDiscountInfoV3?.header + " " + props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
                    <RestaurantCard {...props} />
                </div>

            </div>
        )
    }
}

export default RestaurantCard;