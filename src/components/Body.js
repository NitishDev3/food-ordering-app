import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import searchImg from "../utils/search.png"


const Body = () => {
    const [resListRender, setResListRender] = useState([]);
    let [filResListRen, setFilResListRen] = useState([]);
    const [searchText, setSearchText] = useState(" ");

    useEffect(() => {
        fetchData();
    },[]);

    const PromResCard = PromotedRestaurantCard(RestaurantCard);

    const fetchData = async () => {
        try {
            const dataFromAPI = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const dataValue = await dataFromAPI.json();
            // console.log(dataValue.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setResListRender(dataValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilResListRen(dataValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch {
            (err) =>
                console.error(err);
        }
    }

    const topRatedRes = () => {
        let filteredList = resListRender.filter((res) => res.info.avgRating > 4.2);
        setFilResListRen(filteredList);
        // console.log("top");
    }

    const statusOnline = useOnlineStatus();

    if (statusOnline === false) return <h1>You are offline!!! Please check your internet connection...</h1>

    return resListRender.length == 0 ? (
        <Shimmer />
    ) : (
        <div className="bg-green-200 flex flex-grow min-h-screen" >
            <div className="mx-10 mt-20 mb-[30px] flex-grow ">
                <div className="flex py-3 justify-center items-center">
                    <input
                        type="text"
                        className="h-10 border-solid border-black border-2 rounded"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }
                        } />
                    <button
                        className="ml-1 mr-4"
                        onClick={() => {
                            const filteredResList = resListRender.filter((res) => (
                                res.info.name.toLowerCase().includes(searchText.trim().toLowerCase()) || res.info.cuisines.join("").toLowerCase().includes(searchText.trim().toLowerCase())
                            ))
                            setFilResListRen(filteredResList);
                        }
                        }
                    >
                        <img className="w-10" src={searchImg} alt="" />
                    </button>
                    <button className="w-auto border-solid border-2 border-black p-1 rounded-md mr-2 bg-gray-800 text-white"
                        onClick={() => { topRatedRes() }}
                    >
                        Top Rated( above 4.2⭐)
                    </button>
                    <button
                        className="w-auto border-solid border-2 border-black p-1 rounded-md  bg-gray-300 text-black"
                        onClick={() => { setFilResListRen(resListRender); setSearchText(" ") }}>
                        Clear Filter
                    </button>
                </div>
                <div className="flex flex-wrap justify-center">
                    {filResListRen.map(res =>
                        <Link to={`/menu/${res.info.id}`} key={res.info.id}>
                            {(res?.info?.isOpen && res?.info?.avgRating > 4.2 && res?.info?.aggregatedDiscountInfoV3?.header !== undefined) ? <PromResCard resData={res} /> : <RestaurantCard resData={res} />}
                        </Link>
                    )}
                </div>
            </div>

        </div>)
}

export default Body;