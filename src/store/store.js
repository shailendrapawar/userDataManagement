import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "./slices/themeSlice"
import userReducer from "./slices/userSlice"
const rootReducer={
    theme:themeReducer,
    user:userReducer
}

export const store=configureStore({
    reducer:rootReducer,

})