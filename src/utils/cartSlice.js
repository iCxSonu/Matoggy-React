import { createReducer, createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        // no need of this dummy data
        // items: ["burger", "pizza", "biryani", "frenchFries",
        //    {
        //         OwnerName: "Toxic Sonu",
        //         Age: "22 Yrs Old"
        //     },
        //     {
        //         phNo: "+91 8473829600",
        //         phone: "iPhone Xr"
        //     }, {
        //         address: "Nit silchar",
        //         state: "Assam"
        // }],
    },
    reducers: {
        addItem: (state, action) => {
            // we are mutating the state over hete 
            // we are basically directly modifying the state over here
            state.items.push(action.payload);
            // return [];
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            // state.items.length = 0;  // this will also work but we can also do like below return.
            return { items :[]};  // this will basically replace my original items which is present inside the items.
        }
    }
})

// first i will export the action
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// and then we will export the reducer 
export default cartSlice.reducer;


