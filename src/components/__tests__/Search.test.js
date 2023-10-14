import Body from "../Body"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/mockreslistdata.json"
import { act } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
// always kepp the global file outside the test cases
// fetching globally the data
// we cant directly access the api data because this is not a browser it is an js dom.

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);   // so here we will have our all the data inside the data instead of the data we will use the MOCK_DATA
        }
    })
})

//Some Important functions given by jest
// These are some Important functions given us by jest which is very helpfull is some operations
// These are called Helper functions
// First we need to create the describe

describe("All the Restaurant test are here", () => {

    // beforeAll(() => {
    //     console.log("Before All")
    // })

    // afterAll(() => {
    //     console.log("After All")
    // })

    // beforeEach(() => {
    //     console.log("Before Each")
    // })

    // afterEach(() => {
    //     console.log("After Each")
    // })

    // Testing Starts Below > 

    it("Should search resList for burgers text input", async () => {
        // rendering body after calling the api from the fetch - that is MOCK_DATA

        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>))  // wrapping inside act fn which is an async function and it returns an async function where we will render our component

        // cards before checking

        const cardsBeforeSearch = screen.getAllByTestId("resCard")
        expect(cardsBeforeSearch.length).toBe(20)


        // after checking we will assert

        const searchBtn = screen.getByRole("button", { name: "Search" })

        // console.log(searchBtn)

        // Now we will create an searchInputfor checking the input 
        const searchInput = screen.getByTestId("searchInput")

        // Now we will fire an event

        fireEvent.change(searchInput, { target: { value: "burger" } })

        // fireevent for change for rescard
        fireEvent.click(searchBtn)


        // Now we will expect for search btn
        // expect(searchBtn).toBeInTheDocument();

        // now we will expect for searchInput

        const cardsAfterSearch = screen.getAllByTestId("resCard")  // it will give me all the elements

        expect(cardsAfterSearch.length).toBe(1)


    })

    // Now creating for the top rated restaurant

    it("should give the top rated restaurant", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ))


        // Now writing the logic for the top rated restaurant card

        const cardsbeforeTopRated = screen.getAllByTestId("resCard")
        expect(cardsbeforeTopRated.length).toBe(20)

        //Now find the top rated button
        const topratedBtn = screen.getByRole("button", { name: "Top Rated Restaurents" })
        fireEvent.click(topratedBtn)

        // now checking the top Rated restaurants working or not

        const cardsafterTopRated = screen.getAllByTestId("resCard")
        expect(cardsafterTopRated.length).toBe(12)

        // Now if this works means we have tested our top rated restaurant successfully
        // when we Click on the top rated restaurant It shows 13 cards first we need to count that how many cards are there in the restaurant cards by our own
        // we can use the manual testing here means testing by our own in the applicatin which we have created


    })

})