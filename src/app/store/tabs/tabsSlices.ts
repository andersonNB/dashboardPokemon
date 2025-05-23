import {createSlice} from "@reduxjs/toolkit";

const initialState: {tab: string} = {
	tab: "",
};

const tabsSlice = createSlice({
	name: "tabs",
	initialState,
	reducers: {
		toggleTab(state, action) {
			console.log(action.payload);
			state.tab = action.payload;
			localStorage.setItem("tabs", JSON.stringify(action.payload));
		},
	},
});

export const {toggleTab} = tabsSlice.actions;
export default tabsSlice.reducer;
