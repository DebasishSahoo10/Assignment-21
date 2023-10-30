import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Event = {
  name: string;
  date: string;
  location: string;
  description: string;
  volunteersRequired: number;
  _id: string;
};
type State = {
  events: Event[];
};
const initialState: State = {
  events: [
    {
      name: "Marathon",
      date: "22/02/2023",
      location: "Bhubaneswar",
      description: "2 Hour Long Marathon",
      volunteersRequired: 23,
      _id: "0000001",
    },
    {
      name: "Road Cleaning",
      date: "22/09/2023",
      location: "Bhubaneswar",
      description: "Cleaning Roads under Govt Initiation",
      volunteersRequired: 8,
      _id: "0000002",
    },
    {
      name: "School Paint",
      date: "22/02/2022",
      location: "Delhi",
      description: "Painting Community Schools",
      volunteersRequired: 12,
      _id: "0000003",
    },
    {
      name: "Road Show",
      date: "22/02/2023",
      location: "Bhubaneswar",
      description: "For colleting donation for old-age homes",
      volunteersRequired: 20,
      _id: "0000004",
    },
  ],
};
export const EventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    ADD_EVENT: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    DELETE_EVENT: (state, action: PayloadAction<string>) => {
      const foundIndex = state.events.findIndex(
        (event) => event._id === action.payload,
      );
      state.events.splice(foundIndex, 1);
    },
    EDIT_EVENT: (state, action: PayloadAction<Event>) => {
      const foundIndex = state.events.findIndex(
        (event) => event._id === action.payload._id,
      );
      state.events[foundIndex] = action.payload;
    },
  },
});
