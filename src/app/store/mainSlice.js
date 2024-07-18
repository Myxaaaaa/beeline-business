import { createSlice } from "@reduxjs/toolkit";

 const mainSlice = createSlice({
    name: 'main',
    initialState: [],
    reducers: {}
})

export const mainReducer = mainSlice.reducer;
