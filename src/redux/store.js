import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "./cakeslicer";

const store = configureStore({
    reducer:{
        cakemul :cakeReducer,
    }
})

export default store;