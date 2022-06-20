import {createSlice} from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: Cookies.get("token") ?? false
    },

    reducers:{
        login: (state,action) =>{
            Cookies.set("token", action.payload)
            state.user = action.payload
        },
        logout: state =>{
            state.user = false
            Cookies.remove("token")
        }

    }
});

export const {login, logout} = authSlice.actions
export default authSlice.reducer