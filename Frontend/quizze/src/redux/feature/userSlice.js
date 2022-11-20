import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "",
    email: "",
    name: "",
    isLogged: false,
    accessToken: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        signIn(state, action){
            Object.assign(state, {
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                isLogged: true,
                accessToken: action.payload.accessToken,
            })
        },
        signOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer;