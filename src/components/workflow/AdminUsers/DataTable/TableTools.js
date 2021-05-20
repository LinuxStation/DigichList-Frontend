import React from 'react'; 

import {
    GridToolbarContainer,
    GridFilterToolbarButton,
    GridToolbarExport,
} from '@material-ui/data-grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import TableStyle from '../../Defects/TableStyle'

import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

import CustomDialog from '../../Dialog/Dialog';
import AddAdminForm from '../AddForm';
import EditAdminForm from '../EditForm';
import DeleteForm from '../DeleteForm';


function SelectData (data, selected){
    let temp = []
    for(let i=0; i< data.length; i++){
        for(let j=0; j<selected.length; j++){
            if (data[i].id == selected[j]){
                temp.push(data[i])
            }
        }
    }
    return temp;
}

export default function CustomToolbar(numSelected, data) {
    const [open, setOpenState] = React.useState(false)
    const [modalContent, setModalContent] = React.useState({});
    const classes = TableStyle()

    const modalData = [
        {
            id: 'addAdmin',
            content: <AddAdminForm />,
            title: 'Add new Admin',
        },
        {
            id: 'editAdmin',
            content: <EditAdminForm data={SelectData(data, numSelected)} />,
            title: 'Edit Admin data',
        },
        {
            id: 'deleteAdmin',
            content: <DeleteForm data={SelectData(data, numSelected)} />,
            title: 'Delete Admins data',
        }
    ]

    const handleClickOpen = (dataId) => {
        setOpenState(true)
        setModalContent(modalData[dataId])
    };


    return (
        <GridToolbarContainer>
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <GridFilterToolbarButton className={classes.toolButton} />
                    <GridToolbarExport className={classes.toolButton} />
                </Grid>
                <Grid item xs={2} className={classes.toolGrid}>
                    <Tooltip title="Add new defect">
                        <IconButton aria-label="add" className={classes.toolIcon} onClick={event => handleClickOpen(0, event)}>
                            <PersonAddRoundedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit defect">
                        <IconButton className={classes.toolIcon} aria-label="edit" disabled={numSelected.length == 0}
                            onClick={event => handleClickOpen(1, event)}>
                            <EditSharpIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete defect">
                        <span>
                            <IconButton aria-label="delete" className={classes.toolIcon} disabled={numSelected.length == 0}
                                onClick={event => handleClickOpen(2, event)}>
                                <DeleteOutlineRoundedIcon />
                            </IconButton>
                        </span>
                    </Tooltip>
                </Grid>
            </Grid>
            <CustomDialog title={modalContent.title} form={modalContent.content} open={open} setOpenState={setOpenState} />
        </GridToolbarContainer>
    );
}
