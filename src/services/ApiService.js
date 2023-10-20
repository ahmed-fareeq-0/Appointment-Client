import axios from "axios";
import { DOCTORS_BASE_URL, API_BASE_URL } from "../api";

export const getDoctors = async () => {
    try {

    } catch (error) {

    }
}

export const registerUser = async (name, email, phone, password) => {
    try {
        await axios.post(`${API_BASE_URL}/register_patients`, { name, email, phone, password, user_type: "patient" }).then(res => {
            console.log(res.data);
        });
    } catch (error) {
        throw error;
    }
}
