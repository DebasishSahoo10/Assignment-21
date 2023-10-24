import { configureStore } from "@reduxjs/toolkit";
import { WardSlice } from "./WardSlice";
import { PatientSlice } from "./PatientSlice";

export const store = configureStore({
    reducer : {
        Ward : WardSlice.reducer,
        Patient : PatientSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch