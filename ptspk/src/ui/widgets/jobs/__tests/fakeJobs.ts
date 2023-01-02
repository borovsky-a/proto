import { JobListEntity } from "types/jobs";

export const fakeJobs: JobListEntity[] = [
    {
       id: 1,
       enabledFlag: true,
       name: 'CheckListUpdate',
       displayName:'Обновление контрольных списков',
       status: 'idle',
       startTime: '10.10.2022 00:00:05',
       executionTime: '00:00:05',
       executionResult: 'success',
       nextTime: '11.10.2022 00:00:05',
       percentageCompleted: 100
    },
    {
       id: 2,
       enabledFlag: true,
       name: 'BinCheckListUpdate',
       displayName:'Обновление баз электронных документов',
       status: 'process',
       startTime: '10.10.2022 00:00:05',
       executionTime: '00:00:05',
       executionResult: 'success',
       nextTime: '11.10.2022 00:00:05',
       percentageCompleted: 100
    },
    {
       id: 3,
       enabledFlag: true,
       name: 'BorderCrossing',
       displayName:'Синхронизация РПГГ',
       status: 'stopped',
       startTime: '10.10.2022 00:00:05',
       executionTime: '00:00:05',
       executionResult: 'success',
       nextTime: '11.10.2022 00:00:05',
       percentageCompleted: 100
    },
    {
       id: 4,
       enabledFlag: true,
       name: 'BorderCrossingLogs',
       displayName:'Синхронизация жургалов РПГГ',
       status: 'idle',
       startTime: '10.10.2022 00:00:05',
       executionTime: '00:00:05',
       executionResult: 'success',
       nextTime: '11.10.2022 00:00:05',
       percentageCompleted: 100
    }

];