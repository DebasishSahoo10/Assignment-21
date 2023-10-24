import { createAction } from '@reduxjs/toolkit'
import { Ward } from './WardSlice'
import { Patient } from './PatientSlice'

export const ADD_WARD = createAction("Ward/ADD_WARD", (wardObj: Ward) => ({
    payload: wardObj
}))
export const DELETE_WARD = createAction("Ward/DELETE_WARD", (wardID : string) => ({
    payload : wardID
}))
export const EDIT_WARD = createAction("Ward/EDIT_WARD", (wardObj : Ward) => ({
    payload : wardObj
}))
export const ADD_PATIENT = createAction("Patient/ADD_PATIENT", (patientObj : Patient) => ({
    payload : patientObj
}))
export const DELETE_PATIENT = createAction("Patient/DELETE_PATIENT", (patientID : string) => ({
    payload : patientID
}))
export const EDIT_PATIENT = createAction("Patient/EDIT_PATIENT", (patientObj : Patient) => ({
    payload : patientObj
}))