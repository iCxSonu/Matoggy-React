import { useEffect, useState } from "react";
import { MENU_API } from "./constants"; 

const useRestaurantMenu = (resId) => {
    // local state variable
    const [menuofres,setmenuofres] = useState([])
    useEffect(() => {
        apiCalling();

    }, [])
    
    const apiCalling = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json()

        console.log(json)
        setmenuofres(json.data)
    }
    return menuofres;
}

export default useRestaurantMenu