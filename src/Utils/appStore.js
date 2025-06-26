import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReduser from "./moviesSlice"
import gptReduser from "./gptSlice"
import configReduser from "./configSlice"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReduser,
            gpt: gptReduser,
            config:configReduser,
        }
    }
)

export default appStore