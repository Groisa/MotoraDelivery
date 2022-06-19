import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserMotora } from '../../Entites/User'
import { RootState } from "../store";

type UserState = {
    loadingUser : boolean 
    user : UserMotora | null
}
const initialState :UserState = {
    loadingUser: true,
    user: null
}
const slice = createSlice({
    name: 'userPrefix',
    initialState,
    reducers: {
        updateUserMotora: (state, action: PayloadAction<UserMotora>) => {
            state.loadingUser = false
            state.user = action.payload
        },
        deletUserMotora: (state) => {
            state.loadingUser = false
            state.user = null
        }
    }
})
export const { deletUserMotora, updateUserMotora } = slice.actions
export default slice.reducer
export const selectUserMotoraLogged = (state: RootState) => !!state.userDataMotora.user