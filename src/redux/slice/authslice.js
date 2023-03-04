// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios"; 


// export const authenticateUser = createAsyncThunk(
//     "user/authenticate",
//     async (userData) => {
//         const response = await axios.post(
//             "https://megalab.pythonanywhere.com/registration/",
//             userData
//         );
//         if (!response.status) {
//             throw new Error("Server error");
//         }
//         return response;
//     }
// );



// export const profileSlice = createSlice({
//     name: "profile",
//     userId: "",
//     initialState: {
//         userInfo: {
//             name: "",
//             last_name: "",
//             nickname: "",
//             password: "",
//             password2: "",
//             profile_image: "",
//         },
//         userToken: undefined,
//         errorMessage: "",
//         registrationErrMessage: "",
//         status: null,
//     },

//     // extraReducers: (builder) => {
//     //     builder.addCase(authenticateUser.fulfilled, (state, action) => {
//     //       if (action.payload.data.id) {
//     //         localStorage.setItem("userId", action.payload.data.id);
//     //       }
//     //       state.user = action.payload;
//     //       state.userId = action.payload?.id;
//     //       state.registrationErrMessage = "";
//     //       state.status = "resolved";
//     //     });

//     //     builder.addCase(authenticateUser.rejected, (state, action) => {
//     //       state.status = "rejected";
//     //       state.registrationErrMessage =
//     //         "Ошибка вожможно такой никнейм уже существует";
//     //     });

//     //     builder.addCase(loginUser.fulfilled, (state, action) => {
//     //       localStorage.setItem("token", action.payload.token);
//     //       state.userToken = action.payload;
//     //       state.errorMessage = "";
//     //       state.status = "resolved";
//     //     });

//     //     builder.addCase(loginUser.rejected, (state, action) => {
//     //       state.errorMessage = "Пароль или никнейм неправильно ввели !";
//     //     });
//     // },
// });

// export const profileReducer = profileSlice.reducer;