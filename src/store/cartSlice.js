import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add(state, action) {
			state.push(action.payload);
			console.log("Added to Cart!");
		},
		remove(state, action) {
			console.log("Removed From Cart!");
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

// For Store
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
