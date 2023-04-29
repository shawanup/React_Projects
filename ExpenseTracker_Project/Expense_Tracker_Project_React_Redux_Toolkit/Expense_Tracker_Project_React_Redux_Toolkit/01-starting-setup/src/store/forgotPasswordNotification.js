import { createSlice } from "@reduxjs/toolkit";

const showNotificationSlice=createSlice({
    name:'notification',
    initialState:{notification:null},
    reducers:{
        showNotification(state,action){
           state.notification={
              status:action.payload.status,
              message:action.payload.message
           }
        }
    }
})


export const showNotificationActions=showNotificationSlice.actions;


export default showNotificationSlice.reducer;




