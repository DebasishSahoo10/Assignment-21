import { configureStore } from "@reduxjs/toolkit";
import { EventSlice } from "./EventSlice";
import { VolunteerSlice } from "./VolunteerSlice";

export const store = configureStore({
  reducer: {
    Event: EventSlice.reducer,
    Volunteer: VolunteerSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
