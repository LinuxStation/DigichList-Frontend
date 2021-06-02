import React from 'react';

import {
    GridToolbarContainer,
    GridFilterToolbarButton,
    GridToolbarExport,
} from '@material-ui/data-grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import TableStyle from './TableStyle'

import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

import CustomDialog from '../Dialog/Dialog';
import DeleteForm from './CRUD/DeleteForm'
import EditForm from './CRUD/EditForm';


function SelectData(data, selected) {
    let temp = []
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < selected.length; j++) {
            if (data[i].id == selected[j]) {
                temp.push(data[i])
            }
        }
    }
    return temp;
}

export default function CustomToolbar(data, numSelected) {
    const [open, setOpenState] = React.useState(false)
    const [modalContent, setModalContent] = React.useState({});
    const classes = TableStyle()
    const btnId = [0,1,2]

    const modalData = [
        {
            id: 'editAdmin',
            content: <EditForm data={SelectData(data, numSelected)}/>,
            title: 'Edit defect',
        },
        {
            id: 'deleteAdmin',
            content: <DeleteForm data={SelectData(data, numSelected)} />,
            title: 'Delete defects',
        }
    ]

    const handleClickOpen = (dataId) => {
        setOpenState(true)
        setModalContent(modalData[dataId])
    };

    return (
        <GridToolbarContainer>
            <Grid container spacing={3}>
                <Grid item xs={5} md={9} lg={10}>
                    <GridFilterToolbarButton className={classes.toolButton} />
                    <GridToolbarExport className={classes.toolButton} />
                </Grid>
                <Grid item xs={7} md={3} lg={2} className={classes.toolGrid}>
                    <Tooltip title="Edit defect">
                        <>
                            <IconButton className={classes.toolIcon} aria-label="edit" disabled={numSelected.length == 0}
                                onClick={event => handleClickOpen(btnId[0], event)}>
                                <EditSharpIcon />
                            </IconButton>
                        </>
                    </Tooltip>
                    <Tooltip title="Delete defect">
                        <>
                            <IconButton aria-label="delete" className={classes.toolIcon} disabled={numSelected.length == 0}
                                onClick={event => handleClickOpen(btnId[1], event)}>
                                <DeleteOutlineRoundedIcon />
                            </IconButton>
                        </>
                    </Tooltip>
                </Grid>
            </Grid>
            <CustomDialog title={modalContent.title} form={modalContent.content} open={open} setOpenState={setOpenState} />
        </GridToolbarContainer>
    );
}
