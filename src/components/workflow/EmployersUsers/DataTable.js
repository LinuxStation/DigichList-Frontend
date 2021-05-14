import * as React from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormStyle from '../../auth/FormStyle';

const columns = [
    {
        field: 'id',
        headerName: '#id',
        width: 75,
    },
    {
        field: 'firstName',
        headerName: 'Firs Name',
        width: 115,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 115,
    },
    {
        field: 'profession',
        headerName: 'Profession',
        width: 120,
    },
    {
        field: 'date',
        headerName: 'Action',
        width: 160,
        // eslint-disable-next-line react/display-name
        renderCell: () => {
            const classes = FormStyle()
            return (
                <ButtonGroup disableElevation variant="contained"  color="primary">
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.submitBtn}
                        style={{ marginLeft: 16 }}
                    >
                        Accept
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={`${classes.submitBtn} ${classes.denyBtn}`}>
                        Deny
                    </Button>
                </ButtonGroup>)
        }
    },

];

const rows = [
    {
        id: 1,
        firstName: 'Kolya',
        lastName: 'Bolya',
        profession: 'Some worker',
        date: 12,
    },
    {
        id: 2,
        firstName: 'Kolya',
        lastName: 'Bolya2',
        profession: 'Some worker',
        date: 32,
    },
    {
        id: 3,
        firstName: 'Kolya',
        lastName: 'Bolya3',
        profession: 'Some worker',
        date: 43,
    },
    {
        id: 4,
        firstName: 'Kolya',
        lastName: 'Bolya4',
        profession: 'Some worker',
        date: 43,
    },
    {
        id: 5,
        firstName: 'Kolya',
        lastName: 'Bolya5',
        profession: 'Some worker',
        date: 43,
    },
];

export default function RenderCellGrid() {
    const classes = FormStyle()
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [page, setPage] = React.useState(0);
    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                className={classes.dataGrid}
                rows={rows}
                columns={columns}
                page={page}
                onPageChange={(params) => {
                    setPage(params.page);
                }}
                pageSize={8}
                pagination
                onSelectionModelChange={(newSelection) => {
                    setSelectionModel(newSelection.selectionModel);
                }}
                selectionModel={selectionModel}
            />
        </div>
    );
}
