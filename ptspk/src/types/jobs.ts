export type JobStatus = 'idle' | 'process' | 'stopped';
export type JobResult = 'unknown'|'success'| 'error';

export interface JobListEntity {
   id: number;
   enabledFlag: boolean;
   name: string;
   displayName:string;
   status: JobStatus;
   startTime: string;
   executionTime: string;
   executionResult: JobResult;
   nextTime: string;   
   percentageCompleted: number;
}