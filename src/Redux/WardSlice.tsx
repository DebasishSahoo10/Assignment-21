import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Ward = {
    number: number;
    specialisation: string;
    capacity: number;
    _id: string;
}
type State = {
    wards: Ward[];
}
const initialState: State = {
    wards: [
        {
            number: 1,
            specialisation: "General",
            capacity: 45,
            _id: "0000001"
        },
        {
            number: 2,
            specialisation: "ICU",
            capacity: 15,
            _id: "0000002"
        },
        {
            number: 3,
            specialisation: "Neurology",
            capacity: 10,
            _id: "0000003"
        },
        {
            number: 4,
            specialisation: "Cardiology",
            capacity: 10,
            _id: "0000004"
        }
    ]
}
export const WardSlice = createSlice({
    name: "Ward",
    initialState,
    reducers: {
        ADD_WARD: (state, action: PayloadAction<Ward>) => {
            state.wards.push(action.payload)
        },
        DELETE_WARD : (state, action : PayloadAction<string>) => {
            const foundIndex = state.wards.findIndex(ward => ward._id === action.payload)
            state.wards.splice(foundIndex, 1)
        },
        EDIT_WARD : (state, action : PayloadAction<Ward>) => {
            const foundIndex = state.wards.findIndex(ward => ward._id === action.payload._id)
            state.wards[foundIndex] = action.payload
        }
    }
})
