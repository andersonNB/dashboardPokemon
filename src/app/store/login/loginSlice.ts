import {createSlice} from "@reduxjs/toolkit";

interface User {
	email: string;
	password: string;
}

const initialState = {
	isLoggedIn: false,
	user: {
		email: "navarroanderson@gmail.com",
		password: "123456Aa.",
	} as User,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login(state, action) {
			state.isLoggedIn = true;
			state.user = action.payload;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.user = {
				email: "",
				password: "",
			};
		},
	},
});

export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;
