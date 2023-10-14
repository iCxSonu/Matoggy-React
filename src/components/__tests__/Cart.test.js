import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { MOCK_DATA_CART } from "../mocks/mockCartdata.json"
import { act } from "react-dom/test-utils"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_CART)
        }
    })
})

// Writing test cases for our Cart flow
it("Should load my restaurant menu component", async () => {


    await act(async () => render(
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>))


    // now we will search for Dal Fry

    const accordionHeader = screen.getByText("Rice And Biryani (3)")
    fireEvent.click(accordionHeader)

    expect(screen.getAllByTestId("foodItems").length.toBe(3))
})