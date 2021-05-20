import * as React from 'react';
import PropTypes from 'prop-types';

import {
    DataGrid,
} from '@material-ui/data-grid';
import TableStyle from './TableStyle'
import Chip from '@material-ui/core/Chip';
import FormStyle from '../../auth/FormStyle';


import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

import TableTools from './TableToolBar';

const columns = [
    {
        field: 'id',
        headerName: '#id',
        width: 100,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 240,
    },
    {
        field: 'room',
        headerName: 'Room Number',
        width: 140,
    },
    {
        field: 'send',
        headerName: 'Send',
        width: 150,
    },
    {
        field: 'state',
        headerName: 'State',
        width: 150,
        // eslint-disable-next-line react/display-name
        renderCell: (params) => {
            const classes = FormStyle()
            return (
                <div>
                    {params.value == 'Open' ? (
                        <Chip className={classes.opened} variant="outlined" size="small" label="Open" icon={<ErrorRoundedIcon />} />
                    ) : (
                        params.value == 'Fixing' ? (
                            <Chip className={classes.fixing} variant="outlined" size="small" label="Fixing" icon={<FiberManualRecordRoundedIcon />} />
                        ) : (
                            <Chip className={classes.allowed} variant="outlined" size="small" label="Solved" icon={<CheckCircleRoundedIcon />} />
                        )
                    )}
                </div>
            )
        }
    },
    {
        field: 'openDate',
        headerName: 'Open Date',
        width: 250,
    },
    {
        field: 'closedDate',
        headerName: 'Closed Date',
        width: 250,
    },

];


export default function DefectsTable(props) {
    const classes = TableStyle()
    const rows = props.data
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [page, setPage] = React.useState(0);
    return (
        <div className={classes.root}>
            <DataGrid
                className={classes.dataTable}
                rows={rows}
                columns={columns}
                checkboxSelection
                onSelectionModelChange={(newSelection) => {
                    setSelectionModel(newSelection.selectionModel);
                }}
                page={page}
                onPageChange={(params) => {
                    setPage(params.page);
                }}
                pageSize={13} 
                rowsPerPageOptions={[13, 20, 50]}
                selectionModel={selectionModel}
                components={{
                    Toolbar: ((event) => TableTools(selectionModel)),
                }}
            />
        </div>
    );
}

DefectsTable.propTypes = {
    data: PropTypes.array,
}