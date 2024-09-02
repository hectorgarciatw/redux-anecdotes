import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilter: (state, action) => action.payload,
    },
});

// Export the actions creators
export const { setFilter } = filterSlice.actions;

// Export the reducer
export default filterSlice.reducer;
