import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//getting user from local storage
const user = JSON.parse(localStorage.getItem('user'));


const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//register user


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: () =>{

    }
});
export const { reset } = authSlice.actions
export default authSlice.reducer