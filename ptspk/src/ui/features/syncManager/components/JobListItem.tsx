import React, { useState } from "react";
import { Checkbox, Table } from "semantic-ui-react";
import { JobListEntity } from "./types";



export const JobListItem = (item: JobListEntity) => {

    const [enabledFlag, setEnabledFlag] = useState(item.enabledFlag);

    const changeState = () =>{
        setEnabledFlag(!enabledFlag)
    }
    
    return (
    <Table.Row key={item.id}>
        <Table.Cell><Checkbox checked={enabledFlag} slider onClick={changeState}/></Table.Cell>
        <Table.Cell>{item.displayName}</Table.Cell>
        <Table.Cell>{item.status}</Table.Cell>
        <Table.Cell>{item.executionTime}</Table.Cell>
        <Table.Cell>{item.executionProcessTime}</Table.Cell>
        <Table.Cell>{item.executionResult}</Table.Cell>
        <Table.Cell>{item.nextExecutionTime}</Table.Cell>
    </Table.Row>
    )
}