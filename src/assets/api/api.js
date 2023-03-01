import axios from "axios";

const BaseURL = axios.create({
    baseURL: `https://cryxxen.pythonanywhere.com/`
});
let header = { Authorization: `Bearer ${localStorage.getItem("token")}` }

