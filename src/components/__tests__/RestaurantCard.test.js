import { render, screen } from "@testing-library/react"
import RestaurentCard from "../RestaurentCard"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardmock.json"

it("Should load the restaurantCard", () => {

    render(<RestaurentCard resData={MOCK_DATA} />)

    // now we will check
    const name = screen.getByText("Burger King")

    // and then we will expect
    expect(name).toBeInTheDocument();
})