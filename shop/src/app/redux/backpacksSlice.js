import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBackpacks = createAsyncThunk("backpack/fetchBackpacksStatus", async () => {
    const { data } = await axios.get("/backpackData.json")
    return data;
})

const initialState = {
    backpacksItems: []
}

const backpacksSlice = createSlice({
    name: "backpack",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(fetchBackpacks.pending, (state) => {
            state.backpacksItems = [];
        })
        builder.addCase(fetchBackpacks.fulfilled, (state, action) => {
            state.backpacksItems = action.payload;
        })
        builder.addCase(fetchBackpacks.rejected, (state) => {
            state.backpacksItems = [];
        })
    }
})

export const selectBackpackData = (state) => state.backpack.backpacksItems  || [];
// export const { backpacksItems } = backpacksSlice.actions;
export default backpacksSlice.reducer;