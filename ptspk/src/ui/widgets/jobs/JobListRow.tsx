import React from "react";
import { Checkbox, Table } from "semantic-ui-react";
import { JobListEntity } from "types/jobs";


export type JobListItemProps = {
    item: JobListEntity,
    onChangeState: (item: JobListEntity) => void
}

export const JobListRow = ({ item, onChangeState }:JobListItemProps) => {  
    
    return (
    <Table.Row>
        <Table.Cell><Checkbox checked={item.enabledFlag} slider onClick={() => onChangeState(item)}/></Table.Cell>
        <Table.Cell>{item.displayName}</Table.Cell>
        <Table.Cell>{item.status}</Table.Cell>
        <Table.Cell>{item.executionTime}</Table.Cell>
        <Table.Cell>{item.startTime}</Table.Cell>
        <Table.Cell>{item.executionResult}</Table.Cell>
        <Table.Cell>{item.nextTime}</Table.Cell>
    </Table.Row>
    )
}