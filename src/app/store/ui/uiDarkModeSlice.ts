import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UIDarkMode {
	darkMode: "light" | "dark" | null;
}

//TODO: revisar por que se genera el error de hidratación cuando se usa el localstorage como incializador
// revisar si es la forma de inicalizar el local storage aca o si en el provider funciona.
// const getInitialStateLocalStorage = (): UIDarkMode => {
// 	if (typeof localStorage === "undefined") return {darkMode: "light"};

// 	const theme = localStorage.getItem("theme") as "light" | "dark" | null;

// 	return {
// 		darkMode: theme === "dark" ? "dark" : "light",
// 	};
// };

const initialState: UIDarkMode = {
	darkMode: null,
};

const uiDarkModeSlice = createSlice({
	name: "darkMode",
	initialState,
	reducers: {
		setInitTheme(state, action: PayloadAction<UIDarkMode>) {
			state.darkMode = action.payload.darkMode;
		},
		toggleMode(state) {
			state.darkMode = state.darkMode === "dark" ? "light" : "dark";
			localStorage.setItem("theme", state.darkMode);
			document.documentElement.classList.toggle(
				"dark",
				state.darkMode === "dark"
			);
		},
	},
});

export const {toggleMode, setInitTheme} = uiDarkModeSlice.actions;

export default uiDarkModeSlice.reducer;
