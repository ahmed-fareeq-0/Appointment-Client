import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../api";

const initialState = {
    userData: {
        name: "",
        email: "",
        phone: "",
        password: "",
        user_type: "",
    },
    loading: null,
    error: false,
};

export const signUp = createAsyncThunk('signup/signUp', async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register_patients`, userData);
        // const result = JSON.stringify(response.data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(`register error ${error}`);
        throw error;
    }
});


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.loading = false;
        })
        builder.addCase(signUp.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
})

console.log(initialState.userData);