import { LOGO_URL1 } from "../utils/constants"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

export const Header = () => {

    const [btnName, setbtnName] = useState("Login")

    // const data = useContext(UserContext)
    // console.log(data)
    //destructuring the data.loggedInfo
    const { loggedInfo } = useContext(UserContext)
    console.log(loggedInfo)
    
    // creating a normal variable

    const mystatus = useOnlineStatus()


    // creating a state variable for usestate
    // useEffect(() => {
    //     console.log("UseEffect Render")
    // }, [btnName])

    // 1st case using without dep array - caled on each render

    // 2nd case using empty dep-arr - called on initial

    // 3rd case using btn name as a dep-arr - call on every btn render

    // now creating the selector which is an hook 
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg shadow-fuchsia-950 h-[118px] ">
            <div className="w-56  bg-pink-100">
                <Link to={"/"}> <img className="logo bg-pink-100 h-[70px] ml-7 mt-6 hover:ml-4 rounded-3xl" src={LOGO_URL1} /></Link>
            </div>
            <div className="nav-items flex items-center px-3 text-center ">
                <ul className="flex p-4 m-4  ">
                    <li className=" px-4 mx-1 h-8 shadow shadow-purple-950 text-center block border rounded-lg text-blue-500 cursor-pointer" >Online Status: {mystatus ? "🟢" : "🔴"} </li>
                    <li className=" px-4 mx-1 h-8 text-center block border border-white rounded hover:border-gray-200 hover:bg-purple-900 text-blue-500  cursor-pointer"><Link to={"/"}>Home</Link></li>
                    <li className=" px-4 mx-1 h-8 text-center block border border-white rounded hover:border-gray-200 hover:bg-purple-900 text-blue-500  cursor-pointer "><Link to={"/about"}>About us</Link></li>
                    <li className=" px-4 mx-1 h-8 text-center block border border-white rounded hover:border-gray-200 hover:bg-purple-900 text-blue-500  cursor-pointer"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className=" px-4 mx-1 h-8 text-center block border border-white rounded hover:border-gray-200 hover:bg-purple-900 text-blue-500  cursor-pointer "> <Link to="/contact">Contact us</Link></li>
                    <li className=" px-4 mx-1 font-bold text-xl h-8 text-center block border border-white rounded hover:border-gray-200 hover:bg-purple-900 text-blue-500  cursor-pointer"><Link to={"/cart"}>Cart ({cartItems.length})</Link></li>
                    <button className=" px-4 h-1 font-medium " onClick={() => {
                        btnName == "Login" ? setbtnName("Logout") : setbtnName("Login")
                    }}>{btnName}</button>
                    <li className="font-bold">{ loggedInfo}</li>

                </ul>
            </div>
            
        </div>
    )
}
export default Header