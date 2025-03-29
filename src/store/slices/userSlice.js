import { createSlice} from "@reduxjs/toolkit"

const slice= createSlice({
    name:"user",
    initialState:{
        authUser:null,
        usersList:[],
        pageData:null
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser=action.payload
        },
        setUsersList:(state,action)=>{
            state.usersList=action.payload
        },
        setPageData:(state,action)=>{
            state.pageData=action.payload
        },

        deleteUser:(state,action)=>{
            const index=state.usersList.findIndex((item)=>item.id===action.payload.id)
            if(index!=-1){
                state.usersList.splice(index,1)
            }
        }
    }
})
export const {setAuthUser,setUsersList,setPageData,deleteUser}=slice.actions
export default slice.reducer