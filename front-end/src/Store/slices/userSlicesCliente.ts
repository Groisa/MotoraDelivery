import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserClient } from '../../Entites/User'
import { RootState } from "../store";

type UserState = {
    loadingUser : boolean 
    user : UserClient | null
}
const initialState :UserState = {
    loadingUser: true,
    user: null
}
const slice = createSlice({
    name: 'userPrefix',
    initialState,
    reducers: {
        updateUserCliente: (state, action: PayloadAction<UserClient>) => {
            state.loadingUser = false
            state.user = action.payload
        },
        deletUserCliente: (state) => {
            state.loadingUser = false
            state.user = null
        }
    }
})
export const { deletUserCliente, updateUserCliente } = slice.actions
export default slice.reducer
export const selectUserClientLogged = (state: RootState) => !!state.userDataCliente.user