import { createAction } from "@reduxjs/toolkit";
import { Event } from "./EventSlice";
import { Volunteer } from "./VolunteerSlice";

export const ADD_EVENT = createAction("Event/ADD_EVENT", (eventObj: Event) => ({
  payload: eventObj,
}));
export const DELETE_EVENT = createAction(
  "Event/DELETE_EVENT",
  (eventID: string) => ({
    payload: eventID,
  }),
);
export const EDIT_EVENT = createAction(
  "Event/EDIT_EVENT",
  (eventObj: Event) => ({
    payload: eventObj,
  }),
);
export const ADD_VOLUNTEER = createAction(
  "Volunteer/ADD_VOLUNTEER",
  (volunteerObj: Volunteer) => ({
    payload: volunteerObj,
  }),
);
export const DELETE_VOLUNTEER = createAction(
  "Volunteer/DELETE_VOLUNTEER",
  (volunteerID: string) => ({
    payload: volunteerID,
  }),
);
export const EDIT_VOLUNTEER = createAction(
  "Volunteer/EDIT_VOLUNTEER",
  (volunteerObj: Volunteer) => ({
    payload: volunteerObj,
  }),
);
