import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReduser from "./configSlice"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            config:configReduser,
        }
    }
)

export default appStore