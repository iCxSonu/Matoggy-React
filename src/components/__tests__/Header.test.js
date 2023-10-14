import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

it("Should render the login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    // then we will check
    // and we will assert

    // this is the first way to find login button
    // const loginButton = screen.getByRole("button")

    // Another way to find login button is finding with the name like Login button
    // const loginButton = screen.getByText("Login")

    // Now we will find out for the button working on click or not - prev comment
    const loginButton = screen.getByRole("button", { name: "Login" })

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", { name: "Logout" })

    // and then we will expect

    expect(logoutButton).toBeInTheDocument();


    // now we will expect

    expect(loginButton).toBeInTheDocument();
})

// Now checking for the cart items is present or not in the header

it("Should be matched with the cart items", () => {


    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // Now we will check

    // const cartItems = screen.getByText("Cart (0)")

    // by using rejex for searching the cart because cart items may change in the future

    const cartItems = screen.getByText(/Cart/)

    // Now we will assert
    expect(cartItems).toBeInTheDocument();
})