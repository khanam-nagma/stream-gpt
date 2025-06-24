import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReduser from "./moviesSlice"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReduser,
        }
    }
)

export default appStore