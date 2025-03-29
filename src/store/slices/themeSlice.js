import {createSlice} from "@reduxjs/toolkit"
const initialData={
    // dark:"#252422",
    // primary:"#403d39",
    // light:"#ccc5b9",
    // pastel:"#fffcf2"

    dark:"#000000",
    primary:"#586f7c",
    light:"#b8dbd9",
    pastel:"#f4f4f9"
}

const slice= createSlice({
    name:"theme",
    initialState:{
        theme:initialData,
        
    },
    reducers:{
        setTheme:(state,action)=>{
            state.theme=action.payload
        }
    }
})

export const {setTheme}=slice.actions
export default slice.reducer