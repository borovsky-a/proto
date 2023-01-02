import React from 'react';
import { Table } from 'semantic-ui-react';
import { JobListRow } from './JobListRow';
import { JobListEntity } from 'types/jobs';
import { useSortTable } from 'hooks/useSortTable';
import { useAppDispatch, useAppSelector } from 'hooks/app';
import { setJobs } from 'store/slices/syncManagerSlice';


export const JobList = () => {

   const [jobs] = useAppSelector((state) => [
      state.syncManager.jobs
   ]);
   const dispatch = useAppDispatch();
   const { data, onSort, onClick } = useSortTable<JobListEntity>(jobs);

   const onJobEnabledStateChanged = (item: JobListEntity) => {    
      const index = jobs.findIndex(o => o.id === item.id);
      if(index < 0) {
         return;
      }
      const newJobs = [...jobs];
      const newItem = {...newJobs[index]};
      newItem.enabledFlag = !newItem.enabledFlag;
      newJobs[index] = newItem;
      dispatch(setJobs(newJobs))
   }

   return (
      <>
      <Table celled selectable sortable>
         <Table.Header>
            <Table.Row>
               <Table.HeaderCell />
               <Table.HeaderCell
                  sorted={onSort('displayName')}
                  onClick={onClick('displayName')}>
                  Описание
               </Table.HeaderCell>
               <Table.HeaderCell
                  sorted={onSort('status')}
                  onClick={onClick('status')}>
                  Статус
               </Table.HeaderCell>
               <Table.HeaderCell
                  sorted={onSort('executionTime')}
                  onClick={onClick('executionTime')}>
                  Начало
               </Table.HeaderCell>
               <Table.HeaderCell
                  sorted={onSort('executionProcessTime')}
                  onClick={onClick('executionProcessTime')}>
                  Выполнение
               </Table.HeaderCell>
               <Table.HeaderCell
                  sorted={onSort('executionResult')}
                  onClick={onClick('executionResult')}>
                  Результат
               </Table.HeaderCell>
               <Table.HeaderCell
                  sorted={onSort('nextExecutionTime')}
                  onClick={onClick('nextExecutionTime')}>
                  Запланировано
               </Table.HeaderCell>
            </Table.Row>
         </Table.Header>
         <Table.Body>
            {data?.map(o => (
               <JobListRow key={o.id} item={o} onChangeState={onJobEnabledStateChanged} />
            ))}
         </Table.Body>
      </Table>
      </>      
   )
}