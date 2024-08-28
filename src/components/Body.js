import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [resListRender, setResListRender] = useState([]);
    let [filResListRen, setFilResListRen] = useState([])
    const [searchText, setSearchText] = useState("");

    const topRatedRes = () => {
        let filteredList = resListRender.filter((res) => res.info.avgRating > 4.2);
        setFilResListRen(filteredList);
        // console.log("top");
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const dataFromAPI = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const dataValue = await dataFromAPI.json();
            // console.log(dataValue.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.cuisines.join(""))
            setResListRender(dataValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilResListRen(dataValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch {
            (err) =>
                console.error(err);
        }
    }

    return resListRender.length == 0 ? (
        <Shimmer />
    ) : (
        <div className="body" >
            <div className="filter">
                <input
                    type="text"
                    className="search-box"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }
                    } />
                <button
                    className="search-btn"
                    onClick={() => {

                        const filteredResList = resListRender.filter((res) => (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()) || res.info.cuisines.join("").toLowerCase().includes(searchText.toLowerCase())
                        ))
                        setFilResListRen(filteredResList);
                    }
                    }
                >
                    Search
                </button>
                <button className="filter-btn"
                    onClick={() => {topRatedRes()}}
                >
                    Top Rated Restaurants
                </button>
                <button 
                className="clear-filter-btn"
                onClick={()=>(setFilResListRen(resListRender))}>
                    Clear Filter
                </button>
            </div>
            <div className="res-constainer">
                {/* <RestaurantCard resData={resList[0]} /> */}
                {filResListRen.map(res =>
                    <Link to={`/menu/${res.info.id}`}><RestaurantCard key={res.info.id} resData={res} /></Link>
                )}
            </div>
        </div>)
}

export default Body;