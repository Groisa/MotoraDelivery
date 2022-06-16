import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserClient } from '../../Entites/User'

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
        updateUserCliente: (action, state: PayloadAction<UserClient>) => {
            console.log('state é', state)
            console.log('ação', action)
        },
        deleUserCliente: () => {

        }
    }
})
export const { deleUserCliente, updateUserCliente } = slice.actions
export default slice.reducer