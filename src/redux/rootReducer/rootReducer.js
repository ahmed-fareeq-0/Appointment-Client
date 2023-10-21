import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../slices/userSlice";

const rootReducer = combineReducers({
    user: userSlice.reducer,
});

console.log(`rootREDUSER eximple ${rootReducer}`);

export default rootReducer;