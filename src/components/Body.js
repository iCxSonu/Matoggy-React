import RestaurentCard, { withPromotedLabel } from './RestaurentCard'
// import resList from '../utils/mockData';
// import { Header } from "../components/Header"
import { useEffect, useState, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

// import { SWIGGY_API } from '../utils/constants';
function Body() {
    // whatever we will pass in the use state will reflect in variable restlist
    // let ResList = null

    // const [list, setlist] = useState([])
    const [listofcards, setlistofcards] = useState([])
    const [filteredres, setfilteredres] = useState([])
    // for button
    const [btnValue, setbtnValue] = useState("")
    // now creating a promoted card which have all the withpromotedlabel and restaurant info
    const PromotedRestaurantCard = withPromotedLabel(RestaurentCard)



    console.log("Body Redndered", listofcards)
    useEffect(() => {
        apicalling();
    }, [])

    const apicalling = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true")

        // const json = await data.json()
        // console.log(json)

        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.467520903052932&lng=77.0332695543766&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.467520903052932&lng=77.0332695543766&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();

        // console.log("apiData", json?.data.cards[2]);
        // console.log("text", json?.data?.cards);
        console.log(json)

        setlistofcards(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        setfilteredres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // we will ue the onlineStatus method here
    const mystatus = useOnlineStatus()
    if (mystatus == false) return <h1>Looks like your internet connection is gone!! <br /> Please check your internet connection and come back</h1>
    // using the ternary operator return the component if not availav

    // now creating a variable for getting the setUserName function
    const { loggedInfo, setUserName } = useContext(UserContext)

    return listofcards.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className='flex'>
                <div className='search-box m-4 p-4 border-black'>

                    <input type='text' className='input border border-solid border-black' data-testid = "searchInput" value={btnValue}  onChange={(e) => {
                        setbtnValue(e.target.value)
                    }} />
                    <button className='px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-lime-400 shadow-lg shadow-lime-500' onClick={() => {
                        console.log(btnValue)

                        let totalfilterdata = listofcards.filter((r) =>
                            r.info.name.toLowerCase().includes(btnValue.toLowerCase())
                        )
                        setfilteredres(totalfilterdata)  // we are updating the data here so that we need to use the setfiltered in below

                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center  ">
                    <button className='p-4 bg-gray-200 m-2 rounded-lg hover:bg-yellow-800 shadow-lg shadow-purple-950 ' onClick={(() => {
                        {
                            let Totalcards = listofcards.filter((R) =>
                                R.info.avgRating > 4
                            )
                            setfilteredres(Totalcards)   // update the setfiltered restaurants because the data is present in the setfiltered res
                        }
                    })}


                    >Top Rated Restaurents</button>
                </div>
                <div className='m-4 p-4 items-center flex '>

                    <label className='pr-2' >UserName:</label>
                    <input className='border border-black p-2' placeholder='Write Your Username' value={loggedInfo} onChange={((e) => setUserName(e.target.value))} />

                </div>
            </div>
            <div className="restaurent-container flex flex-wrap justify-evenly ">
                {/* now making the restaurant tag clickable and in jsx key should be on parent jsx that is link */}

                {filteredres.map((restaurant) => {
                    return <Link className='Link' key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
                        {restaurant.info.isOpen ? (<PromotedRestaurantCard resData={restaurant} />) :
                            (<RestaurentCard resData={restaurant} />)}</Link>
                })}
                {/* { restaurant.info.isOpen ? (<PromotedRestaurantCard/>) :(<RestaurentCard/>) } */}
                {/* {filteredres.map((restaurant) => {
                    return <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                })} */}
            </div>

        </div>
    );
}

export default Body;


