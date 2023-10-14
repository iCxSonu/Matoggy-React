import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Help from "./components/Help";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import { lazy } from 'react';
// Making an Container for App or we can also say that making an function component
// main component
const Grocery = lazy(() => import("./components/Grocery"))


const AppLayout = () => {
    const [userName, setUserName] = useState("")
    useEffect(() => {
        const data = {
            name: "Sonu",
        }
        // setUserName(data.name)
    })
    return (
        <Provider store= {appStore}>  {/* Provider takes store as a props and we pass appStore as a props */}
        <UserContext.Provider value={{ loggedInfo: userName, setUserName }}>
            <div className="App">
                {/* <UserContext.Provider value={{loggedInfo: "Pritam"}}>
                    we wrapped header earlier
                </UserContext.Provider> */}
                <Header />
                <Outlet />
                <Footer />
            </div>
            </UserContext.Provider>
        </Provider>

    )
}
const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />

                },
                {
                    path: "/contact",
                    element: <Contact />

                },
                {
                    path: "/grocery",
                    // we can write the jsx code inside the fallback = {} and first import the suspense from the react dom library
                    element: <Suspense fallback={<h1>Loading The Grocery Products.....</h1>}><Grocery /></Suspense>
                },
                {
                    path: "/cart",
                    element: <Cart />
                }, {
                    path: "/help",
                    element: <Help />
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />
                }
            ]
        }

    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout />)

// Now for rendering the appRouter configuration we need a routerProvider for this
// now import the Router Provider from react

root.render(<RouterProvider router={appRouter} />)