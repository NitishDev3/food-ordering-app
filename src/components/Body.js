import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"

const Body = () => {
    return (
        <div className="body" >
            <div className="search">Search</div>
            <div className="res-constainer">
                {/* <RestaurantCard resData={resList[0]} /> */}
                {resList.map(res =>
                    <RestaurantCard key={res.info.id} resData={res} />
                )}
            </div>
        </div>
    )
}

export default Body;