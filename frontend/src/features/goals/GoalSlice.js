import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import goalService from './GoalService';

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create new Goal

export const createGoal = createAsyncThunk('/goals/create', async (goalData, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token
        return await goalService.createGoal(goalData, token)


    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkApi.rejectWithValue(message)
    }
});


// get user goals

export const getGoals = createAsyncThunk('goals/getAll', async (_, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token
        return await goalService.getGoals(token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkApi.rejectWithValue(message);

    }
});

//delete goal
export const deleteGoal = createAsyncThunk('/goal/delete', async (id, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token
        return await goalService.deleteGoal(id, token)


    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkApi.rejectWithValue(message)
    }
});


export const goalSlice = createSlice({
    name: ' goal ',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            .addCase(createGoal.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
            
            // getGoal
            .addCase(getGoals.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGoals.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(getGoals.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
            
            //delete goal
            .addCase(deleteGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = state.goals.filter((goal)=> goal.id !== action.payload.id)
            })
            .addCase(deleteGoal.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
    }
});

export const { reset } = goalSlice.actions

export default goalSlice.reducer