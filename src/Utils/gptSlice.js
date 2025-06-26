import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearchPage: false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearchPage = !state.showGptSearchPage;
        },
    },
})


export const {toggleGptSearchView} =  gptSlice.actions
export default gptSlice.reducer