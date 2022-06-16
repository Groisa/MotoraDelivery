import { configureStore } from "@reduxjs/toolkit";
import userReducerMotora from './slices/userSlicesMotora'
import UserReducerCliente from './slices/userSlicesCliente'
const store = configureStore({
    reducer: {
        userDataMotora : userReducerMotora,
        userDataCliente: UserReducerCliente
    }
})
export default store