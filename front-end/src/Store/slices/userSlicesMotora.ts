import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserMotora } from '../../Entites/User'

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
        updateUserMotora: (action, state: PayloadAction<UserMotora>) => {
            console.log('state é', state)
            console.log('ação', action)
        },
        deleUserMotora: () => {

        }
    }
})
export const { deleUserMotora, updateUserMotora } = slice.actions
export default slice.reducer