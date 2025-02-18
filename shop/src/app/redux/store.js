import { configureStore } from "@reduxjs/toolkit";
import filter from "./filterSlice";
import backpack from "./backpacksSlice"

export const store = configureStore({
    reducer: {
        filter,
        backpack
    }
});