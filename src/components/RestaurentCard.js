import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
const RestaurentCard = (props) => {
    const { resData } = props
    // console.log(resData)
    const { loggedInfo } = useContext(UserContext)
    //destructure on the fly

    const { name, cuisines, avgRating, deliveryTime, costForTwo, cloudinaryImageId } = resData?.info

    return (

        <div className="res-card m-4 p-4 w-[230px] bg-gray-100 overflow-hidden  shadow-lg shadow-purple-950 rounded-lg " data-testid="resCard" >
            <img className="card_1 rounded-lg w-[100%] h-[170px]  shadow-lg shadow-fuchsia-950 " alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4> {avgRating}🌟</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo}For Two</h4>
            <h4>User: {loggedInfo}</h4>
        </div>

    )
}

export const withPromotedLabel = () => {
    //  Funtional component - returns
    return (props) => {
        return (
            <div>
                <label className="absolute bg-lime-500 text-white m-1 p-1 rounded-lg">Opened</label>
                <RestaurentCard {...props} />
            </div>
        )
    }
}
export default RestaurentCard;