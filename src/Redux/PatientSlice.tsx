import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export type Patient = {
    _id: string;
    name: string;
    age: number;
    gender: string;
    medicalHistory: string;
    contact: number;
    ward: number;
}
type State = {
    patient: Patient[];
}
const initialState : State = {
    patient: [
        {
            _id: "1",
            name: "Leo Das",
            age: 34,
            gender: "Male",
            medicalHistory: "Asthma",
            contact: 999999,
            ward: 1
        },
        {
            _id: "2",
            name: "Antony Das",
            age: 54,
            gender: "Male",
            medicalHistory: "Knee Disorder",
            contact: 999990,
            ward: 2
        },
        {
            _id: "3",
            name: "Harlod Das",
            age: 54,
            gender: "Male",
            medicalHistory: "Joints Disorder",
            contact: 999900,
            ward: 3
        },
    ]
}
export const PatientSlice = createSlice({
    name: "Patient",
    initialState,
    reducers: {
        ADD_PATIENT : (state, action : PayloadAction<Patient>) => {
            state.patient.push(action.payload)
        },
        DELETE_PATIENT : (state, action : PayloadAction<string>) => {
            const foundIndex = state.patient.findIndex(patient => patient._id === action.payload)
            state.patient.splice(foundIndex, 1)
        },
        EDIT_PATIENT : (state, action : PayloadAction<Patient>) => {
            const foundIndex = state.patient.findIndex(patient => patient._id === action.payload._id)
            state.patient[foundIndex] = action.payload
        }
    }
})