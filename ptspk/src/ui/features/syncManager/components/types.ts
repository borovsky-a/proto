export type JobStatus = 'idle' | 'process' |'error' | 'stopped';
export type JobResult = 'unknown'|'success'| 'error';

export interface JobListEntity {
   id: number;
   enabledFlag: boolean;
   name: string;
   displayName:string;
   status: JobStatus;
   executionTime: string;
   executionProcessTime: string;
   executionResult: JobResult;
   nextExecutionTime: string;   
   percentageCompleted: number;
}