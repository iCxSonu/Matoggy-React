import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = (() => {
    const { resId } = useParams();
    console.log(resId)
    // let [menuofres, setmenuofres] = useState([])
    // the only work of this component will be displaying the data
    // let [menuofres,setmenuofres] = useRestaurantMenu([])

    // just use the menuofres and put the useRestaurantMenu inside it
    const menuofres = useRestaurantMenu(resId)
    //for changing the state we created the index 
    const [showindex, setshowindex] = useState(null) 

    if (menuofres.length == 0) return <Shimmer />

    // Now we will destructure - it was gives us error because we uses the ternary operator below
    // in the starting our useState Was empty and also our menuof res was empty 
    //bcoz whatever we will initialise in useState becomes the value of its variable
    const { name, cuisines, costForTwoMessage } = menuofres?.cards[0]?.card?.card?.info
    // we can also write this as
    // const {menudata} = menuofres?.cards[0]?.card?.card?.info
    // and then below {menudata.name} like this

    const { itemCards } = menuofres?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log("category", menuofres?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    // filtering all the data that has type = restaurant
    const categories = menuofres?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories)

    


    return (
        <div className="text-center mt-4">
            <h1 className="font-bold text-2xl my-4">{name}</h1><p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            {
                categories.map((category,index) => (
                    <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showitem={index == showindex ? true : false} setshowindex={()=> setshowindex(index)} />
                ))
            }
        </div>
    )
})

export default RestaurantMenu;

/*
previuosly the item of cards were like this
{/* <h2>{menuofres?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h2>
            <h2>{menuofres?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2> */

/* and the item of li are like this
{/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li>
                <li>{itemCards[2]?.card?.info?.name}</li> */


