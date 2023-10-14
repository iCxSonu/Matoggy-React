
import { sum } from "../Sum"

test("testing the sum of the two numbers of the sum function", () => {

    const result = sum(4, 5)

    //Assertion 
    expect(result).toBe(9)
})