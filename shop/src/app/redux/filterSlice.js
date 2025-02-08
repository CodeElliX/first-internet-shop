import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchValue: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
     setSearchValue(state, actions) {
       state.searchValue = actions.payload
     }
    }
})

export const {setSearchValue} = filterSlice.actions;
export default filterSlice.reducer;

export const selectValue = (state) => state.filter?.searchValue || "";