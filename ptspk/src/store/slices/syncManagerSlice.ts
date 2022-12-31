import { createSlice } from "@reduxjs/toolkit";
import { JobListEntity } from "../../ui/features/syncManager/components/types";
import { fakeJobs } from "../../ui/features/syncManager/components/__tests/fakeJobs";
import { RootState } from "../store";


export interface SyncManagerState {
    jobs: JobListEntity[];
}
const initialState: SyncManagerState = {
    jobs: [...fakeJobs],
 };
export const syncManagerSlice = createSlice({
    name: 'syncManager',
    initialState,
    reducers: {
      
    }
 });


 export const jobs = (state: RootState) => state.syncManager.jobs;   
 export default syncManagerSlice.reducer;