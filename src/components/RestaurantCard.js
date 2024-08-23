import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    return (
        <div className="res-card">
            <img src={`${RES_IMG_URL}${cloudinaryImageId}`} alt="" />
            <h3>{name}</h3>
            <h6>{cuisines.join(", ")}</h6>
            <h6>{avgRating} stars</h6>
            <h6>{costForTwo}</h6>
            <h6>{sla.deliveryTime} minutes</h6>
        </div>
    )
}

export default RestaurantCard;