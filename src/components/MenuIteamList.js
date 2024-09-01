import { RES_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemList = ({ item }) => {

    const dispatch = useDispatch();

    const handleAddClick = (i) => {
        dispatch(addItem(i));
    }
    return (
        item.map((i) => (
            <div key={i.card.info.id} className="w-full">
                <div className="mx-1 my-1 flex justify-between bg-gray-100 shadow-sm border-gray-400 border-b">
                    <div className="mx-2 w-9/12">
                        <span className="text-lg font-thick mr-2">{i.card.info.name}</span>
                        <span> ₹ {i.card.info.price ? i.card.info.price / 100 : i.card.info.defaultPrice / 100}</span>
                        <p className="text-xs mt-3">{i.card.info.description}</p>
                    </div>
                    <div className="relative w-3/12 rounded">
                        <div className="absolute">
                            <button
                                className="m-2 p-2 bg-black text-white rounded-md"
                                onClick={() => { handleAddClick(i) }}
                            >Add+</button>
                        </div>
                        <img src={RES_IMG_URL + i.card.info.imageId} alt="" className="p-2" />
                    </div>
                </div>
            </div>
        ))
    )
}


export default MenuItemList;