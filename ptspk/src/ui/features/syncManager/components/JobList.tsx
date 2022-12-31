import React from 'react';
import { Table } from 'semantic-ui-react';
import { JobListItem } from './JobListItem';
import { JobListEntity } from './types';
import _ from 'lodash';
import { useSortTable} from '../../../../hooks/useSortTable';
import { useAppSelector } from '../../../../hooks/app';


export const JobList = () => {  

  const [jobs] = useAppSelector((state) => [
      state.syncManager.jobs
  ]);

  const { data, onSort, onClick } = useSortTable<JobListEntity>(jobs);

   return (
      <Table celled selectable sortable>
         <Table.Header>
            <Table.Row>
               <Table.HeaderCell/>
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
            {data.map(o => (
               <JobListItem {...o} />
            ))}
         </Table.Body>
      </Table>
   )
}