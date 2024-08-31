import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    return (
        <div className="w-[250px] h-[335px] m-[10px] rounded-[7px] bg-gray-200 hover:bg-gray-300">
            <img className="w-[240px] h-[200px] ml-1 pt-[5px] px-[5px] rounded-[15px]"
                src={`${RES_IMG_URL}${cloudinaryImageId}`} alt="" />
            <h3 className="font-bold ml-2">{name}</h3>
            <p className="text-xs ml-2">{cuisines.join(", ")}</p>
            <p className="text-xs ml-2">{avgRating} stars</p>
            <p className="text-xs ml-2">{costForTwo}</p>
            <p className="text-xs ml-2">{sla.deliveryTime} minutes</p>
        </div>
    )
}

export const PromotedRestaurantCard = () =>{
    return (props)=>{
        // console.log(props.resData.info.aggregatedDiscountInfoV3.header +" "+ props.resData.info.aggregatedDiscountInfoV3.subHeader)
        return (
            <div className="">
                <label
                className="absolute m-2 bg-black text-white h-[30px] items-center px-2 rounded-r-lg"
                >{props?.resData?.info?.aggregatedDiscountInfoV3?.header +" "+ props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;