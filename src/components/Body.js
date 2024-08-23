import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useState } from "react";

const Body = () => {
    const [resListRender, setResListRender] = useState(resList);
    const topRatedRes = () =>{
        let filteredList = resListRender.filter((res) =>res.info.avgRating > 4.2);
        setResListRender(filteredList);
    }
    return (
        <div className="body" >
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {topRatedRes()}}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-constainer">
                {/* <RestaurantCard resData={resList[0]} /> */}
                {resListRender.map(res =>
                    <RestaurantCard key={res.info.id} resData={res} />
                )}
            </div>
        </div>
    )
}

export default Body;