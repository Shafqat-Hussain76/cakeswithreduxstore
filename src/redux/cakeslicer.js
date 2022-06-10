import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    noOfCakes: 100,
}

const cakeslicer = createSlice({
    name: "cak",
    initialState,
    reducers :{
        ordered: (state)=>{
            state.noOfCakes--;
        },
        restocked:(state, action)=>{
            state.noOfCakes += action.payload;

        }
    }
})
export const { ordered,restocked} = cakeslicer.actions;
export const cakeReducer = cakeslicer.reducer;