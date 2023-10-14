import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({ data, showitem,setshowindex }) => {
    // console.log(data)

    // creating a state variable to check whether it is present or not
    // const [showitem, setshowitem] = useState(false)
    const showItemList = (() => {
        setshowindex()
    })
    // const showItemList1 = showItemList;

    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto bg-gray-100 my-4 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={showItemList}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                {showitem && <ItemList items={data.itemCards} />}

            </div>
            {/* Body*/}



        </div>
    )
}

export default RestaurantCategory


{/* ResCategory */ }
