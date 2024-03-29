import React from 'react';
import PropTypes from 'prop-types';

import {
    DataGrid,
} from '@material-ui/data-grid';
import TableStyle from './TableStyle'
import Chip from '@material-ui/core/Chip';
import FormStyle from '../../auth/FormStyle';
import Button from '@material-ui/core/Button';

import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';


import TableTools from './TableToolBar';
import DescriptionModal from './DescriptionModal'

function RenderDescription(params) {
    const context = params.row
    const classes = FormStyle()
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {open ? <DescriptionModal open={open} handleClose={handleClose} context={context} />
                : null
            }
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleOpen} className={classes.description} >
                {params.value}
            </Button>
        </div>
    )
}


function RenderState(params) {
    const classes = FormStyle()
    const paramValue = params.value;

    return (
        <div>
            {paramValue == 'Open' ? (
                <Chip variant="outlined" size="small" label="Open" className={classes.opened} icon={<ErrorRoundedIcon />} />
            ) : (
                paramValue == 'Fixing' ? (
                    <Chip variant="outlined" size="small" label="Fixing" className={classes.fixing} icon={<FiberManualRecordRoundedIcon />} />
                ) : (
                    <Chip className={classes.allowed} variant="outlined" size="small" label="Solved" icon={<CheckCircleRoundedIcon />} />
                )
            )}
        </div>
    )
}


const column1s = [
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
        field: 'decides',
        headerName: 'Decides defect',
        width: 150,
    },
    {
        field: 'state',
        headerName: 'State',
        width: 150,
        renderCell: RenderState,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 300,
        renderCell: RenderDescription,
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
                columns={column1s}
                checkboxSelection
                onSelectionModelChange={(newSelection) => {
                    setSelectionModel(newSelection.selectionModel);
                }}
                page={page}
                onPageChange={(params) => {
                    setPage(params.page);
                }}
                pageSize={13}
                disableSelectionOnClick
                rowsPerPageOptions={[13, 20, 50]}
                selectionModel={selectionModel}
                components={{
                    Toolbar: ((event) => TableTools(props.data, selectionModel)),
                }}
            />
        </div>
    );
}

DefectsTable.propTypes = {
    data: PropTypes.array,
}