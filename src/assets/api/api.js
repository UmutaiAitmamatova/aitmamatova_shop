import axios from "axios";

const BaseURL = axios.create({
    baseURL: `https://cryxxen.pythonanywhere.com/`
});
let header = { Authorization: `Bearer ${localStorage.getItem("token")}` }

const register = (username, email, password) => {
    return BaseURL.post("users/user/", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return BaseURL
        .post("users/user/", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.username) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
    return BaseURL.post("users/user/").then((response) => {
        return response.data;
    });
};

const Auth = {
    register,
    login,
    logout,
}

export default Auth;