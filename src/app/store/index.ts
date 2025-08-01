import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import {useDispatch, useSelector} from "react-redux";
import pokemonReducer from "./pokemons/pokemonSlice";
import uiDarkModeReducer from "./ui/uiDarkModeSlice";
import tabsReducer from "./tabs/tabsSlices";
import loginReducer from "./login/loginSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		pokemons: pokemonReducer,
		ui: uiDarkModeReducer,
		tabs: tabsReducer,
		login: loginReducer,
	},
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
