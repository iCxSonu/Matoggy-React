import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"
const ItemList = ({ items }) => {
    console.log("item data", items)
    // we are passing props

    //now we will use the dispaatch over here and pass the items as an actions to the reducer
    const Dispatch = useDispatch()
    const handleItem = (item) => {
        Dispatch(addItem(item))
    }


    return (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.card.info.id} data-testid="foodItems" className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">

                            <div className="py-2">
                                <span className=" ">{item.card.info.name}</span>
                                <span> ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            </div>


                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className=" absolute">
                                <button className="p-1 mx-8 m-auto rounded-lg bg-black text-white " onClick={() => handleItem(item)}>Add +</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full " />

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList



