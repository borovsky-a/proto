import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobListEntity } from "types/jobs";
import { fakeJobs } from "ui/widgets/jobs/__tests/fakeJobs";
import { RootState } from "../store";


export interface SyncManagerState {
    jobs: JobListEntity[];
}
const initialState: SyncManagerState = {
    jobs: [...fakeJobs]
 };
export const syncManagerSlice = createSlice({
    name: 'syncManager',
    initialState,
    reducers: {
        setJobs: (state, action: PayloadAction<JobListEntity[]>)=> {
            state.jobs = [...action.payload]
          }
    }
 });

 export const { setJobs } = syncManagerSlice.actions;
 export const jobs = (state: RootState) => state.syncManager.jobs;   
 export default syncManagerSlice.reducer;