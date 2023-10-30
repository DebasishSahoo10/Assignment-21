import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Volunteer = {
  _id: string;
  name: string;
  contact: number;
  skills: string;
  availability: boolean;
  intrestArea: string;
  associatedEvent: string;
};
type State = {
  volunteer: Volunteer[];
};
const initialState: State = {
  volunteer: [
    {
      _id: "1",
      name: "Leo Das",
      contact: 9000000,
      skills: "Event Management, People Handling, Rescue",
      availability: true,
      intrestArea: "Marathon, Cooking, Community",
      associatedEvent: "Cycling Marathon",
    },
    {
      _id: "2",
      name: "Antony Das",
      contact: 9000000,
      skills: "Event Management, People Handling, Rescue",
      availability: true,
      intrestArea: "Marathon, Cooking, Community",
      associatedEvent: "Cycling Marathon",
    },
    {
      _id: "3",
      name: "Harlod Das",
      contact: 9000000,
      skills: "Event Management, People Handling, Rescue",
      availability: true,
      intrestArea: "Marathon, Cooking, Community",
      associatedEvent: "Cycling Marathon",
    },
  ],
};
export const VolunteerSlice = createSlice({
  name: "Volunteer",
  initialState,
  reducers: {
    ADD_VOLUNTEER: (state, action: PayloadAction<Volunteer>) => {
      state.volunteer.push(action.payload);
    },
    DELETE_VOLUNTEER: (state, action: PayloadAction<string>) => {
      const foundIndex = state.volunteer.findIndex(
        (volunteer) => volunteer._id === action.payload,
      );
      state.volunteer.splice(foundIndex, 1);
    },
    EDIT_VOLUNTEER: (state, action: PayloadAction<Volunteer>) => {
      const foundIndex = state.volunteer.findIndex(
        (volunteer) => volunteer._id === action.payload._id,
      );
      state.volunteer[foundIndex] = action.payload;
    },
  },
});
