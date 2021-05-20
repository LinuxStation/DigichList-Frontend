import React from 'react';
import DataTable from '../../components/workflow/AdminUsers/DataTable/DataTable'

import WorkflowStyle from "../../components/workflow/WorkflowStyle";
import Paper from '@material-ui/core/Paper';

const data = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Jonson',
        email: 'jj244@gmail.com',
        registeredDate: new Date(),
        password: 'dsdsadasd3423423',
    },
    {
        id: 2,
        firstName: 'John2',
        lastName: 'Jonson2',
        email: 'jj2442@gmail.com',
        registeredDate: new Date(),
        password: 'dsdsadasd3423423',
    },
]

export default function AdminUsers() {
    const classes = WorkflowStyle();
    return (
        <Paper className={classes.paper}>
            <strong>Admin Users</strong>
            <DataTable data={data} />
        </Paper>
    )
}