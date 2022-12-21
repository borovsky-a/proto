import { createSlice } from "@reduxjs/toolkit";
import { type AppStatus } from "../../types/app";
import { RootState } from "../store";

export interface AppState {
    status: AppStatus;
}
const initialState: AppState = {
    status: 'loading',
 };


 export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoadingAppStatus: (state) => {
            state.status = 'loading';
        },
        setIDLEAppStatus: (state) => {
            state.status = 'idle';
        },
        setFailedAppStatus: (state) => {
            state.status = 'failed';
        },
    }
 });

 export const { 
    setLoadingAppStatus,
    setIDLEAppStatus,
    setFailedAppStatus } = appSlice.actions;

export const appStatus = (state: RootState) => state.app.status;   

export default appSlice.reducer;