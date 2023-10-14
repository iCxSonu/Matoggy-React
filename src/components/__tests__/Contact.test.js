import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
// import "@testing-library/jest-dom"
import "@testing-library/jest-dom"


describe("contact us page test cases", () => {

    // Creating some important functions given us by jest
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



    // test("testing the contact component", () => {

    //     render(<Contact />)
    //     const heading = screen.getAllByRole("heading")

    //     expect(heading).toBeInTheDocument();


    // })
    
    
    test("testing the contact component", () => {

        render(<Contact />)
        const button = screen.getByText("Submit")

        expect(button).toBeInTheDocument();
    })

    // testing for the another input

    // test("Testing for the input box", () => {

    //     render(<Contact />)
    //     // const input = screen.getByRole("input")
    //     const input = screen.getByRole("text")
    //     expect(input).toBeInTheDocument()
    // })

    test("Now we see how all the input boxes", () => {
        render(<Contact />)
        const inputBoxes = screen.getAllByRole("textbox")
        // console.log(inputBoxes.length)
        expect(inputBoxes.length).toBe(2)
    })
})





// // now the testing part

// // we will first create the file name inside the test

// // like sum.test.js for javascript

// // first i will import all the things and then we will write our test cases

// // creating the describe for testing all the togetger basically keeping all them together

// describe("Basically for Header Component", () => {
    
//     test("checking the button is working or not", () => {
        
//         render(<Contact />)
        
//         const button = screen.getByText("Submit")

//         console.log(button)

//         expect(button).toBe("Submit")
//     })

//     test("cheking the input basically all the input", () => {
//         render(<Contact />)
        
//         const inputButton = screen.getAllByPlaceholderText("placeholder")

//         console.log(inputButton)

//         expect(inputButton).toBe("name")
//     })
//     test("checking the heading", () => {

//         render(<Contact />)
        
//         const heading = screen.getAllByRole("heading")

//         console.log(heading)

//         expect(heading).toBe("heading")
//     })

//     test("chechking for all the exports", () => {
        
//         render(<Contact />)
        
//         const exports = screen.getAllByRole("export")

//         console.log(exports)

//         expect(exports).toBeInTheDocument("exports")


//     test("testing for the header component working or not", () => {
            

//         render(<Contact />)
            
//         const Header = screen.getByTitle("Header")

//         console.log(Header)

//         expect(Header).toBeInTheDocument("Header")

//         })
//     })



// })

// const calculator = (sum,mul,subs,div) => {
    
//     const sum = (a, b) => {
//         return a+b
//     }
//     const subs = (a, b) => {
//         return a-b
//     }
//     const mul = (a ,b) => {
//     return a*b
//     }
//     const div = (a, b) => {
//         return a/b
//     }
// }

// // Now calling all the functio from below with a given value

// console.log(calculator.sum(5, 6))
// console.log(calculator.subs(9, 7))
// console.log(calculator.mul(7, 8))
// console.log(calculator.div(20, 4))

// describe("Now checking the calculator", () => {
//     test("testing the sum", () => {
        
//         render(<Calculator />)
        
//         const Sum = screen.getByRole("sum")

//         console.log(Sum)

//         expect(Sum).toBe(11)

//     })
//     test("now testing the subs", () => {

//         render(<Calculator />)
        
//         const Substract = screen.getByRole("subs")

//         console.log(Substract)

//         expect(Substract).toBe(2)
//     })

//     test("now test the mul", () => {
        
//         render(<Contact />)
        
//         const Multiply = screen.getByRole("mul")

//         console.log(Multiply)

//         expect(Multiply).toBe(56)
//     })

//     test("Now testing the div", () => {
        
//         render(<Contact />)
        
//         const Division = screen.getByRole("div")

//         console.log(Division)

//         expect(Division).toBe(5)
//     })
// })

// // Now it will check all the calculator and the send me the data