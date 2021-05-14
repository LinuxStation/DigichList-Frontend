import React,{useState} from 'react';


import { tableHand } from './TableStyle';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

//Icons
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import CustomDialog from '../Dialog/Dialog';
import AddAdminForm from '../AddForm';
import EditAdminForm from '../EditForm';
import DeleteForm from '../DeleteForm';

const EnhancedTableToolbar = (props) => {

    const classes = tableHand();
    const { numSelected, selected } = props;

    const modalData = [
        {
            id: 'addAdmin',
            content: <AddAdminForm />,
            title: 'Add new admin',
        },
        {
            id: 'editAdmin',
            content: <EditAdminForm data={selected} />,
            title: 'Edit admin data',
        },
        {
            id: 'deleteAdmin',
            content: <DeleteForm data={selected} />,
            title: 'Delete admin data',
        }
    ]

    const [open, setOpenState] = useState(false)
    const [modalContent, setModalContent] = useState({});

    const handleClickOpen = (dataId) => {
        setOpenState(true)
        setModalContent(modalData[dataId])
    };

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    Admins
                </Typography>
            )}
            <Grid container item xs={2} spacing={2} className={classes.tableHeadGrid}>
                {numSelected > 0 ? (
                    <div className={classes.tableHeadGrid}>
                        <Tooltip title="Edit">
                            <IconButton aria-label="edit" onClick={event => handleClickOpen(1, event)}>
                                <EditIcon className={classes.tooltipIcon} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton aria-label="delete" onClick={event => handleClickOpen(2, event)}>
                                <DeleteIcon className={classes.tooltipIcon} />
                            </IconButton>
                        </Tooltip>
                    </div>
                ) : (
                    <div>
                        <Tooltip title="Add new admin">
                            <IconButton aria-label="add" onClick={event => handleClickOpen(0, event)}>
                                <PersonAddIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                )}
            </Grid>
            <CustomDialog title={modalContent.title} form={modalContent.content} open={open} setOpenState={setOpenState} />
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    selected: PropTypes.array,
};

export default EnhancedTableToolbar