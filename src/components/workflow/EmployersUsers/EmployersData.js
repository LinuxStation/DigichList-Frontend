import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import Chip from '@material-ui/core/Chip';
import FormStyle from '../../auth/FormStyle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';


const columns = [
    {
        field: 'id',
        headerName: '#id',
        width: 90,
    },
    {
        field: 'firstName',
        headerName: 'Firs Name',
        width: 145,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 145,
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 180,
    },
    {
        field: 'isRegistered',
        headerName: 'Registered',
        width: 125,
        // eslint-disable-next-line react/display-name
        renderCell: (params) => {
            const classes = FormStyle()
            const paramValue = params.value;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [selectedIndex, setSelectedIndex] = React.useState(paramValue);
            const options = [
                 'Set No',
                 'Set Yes',
            ];
            
            return (
                <div className={classes.rootClip}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => {
                         
                            const closeMenu = (event, index) =>{
                                setSelectedIndex(index);
                                popupState.close();
                            }
                            return (
                                <React.Fragment>
                                    {paramValue == 1 ? (
                                        <Button aria-controls="fade-menu" aria-haspopup="true" {...bindTrigger(popupState)}>
                                            <Chip className={classes.allowed} variant="outlined" size="small" label="Yes" icon={<DoneIcon />} />
                                        </Button>
                                    ) : (
                                        <Button aria-controls="fade-menu" aria-haspopup="true" {...bindTrigger(popupState)}>
                                            <Chip className={classes.forbidden} variant="outlined" size="small" label="No" icon={<CloseIcon />} />
                                        </Button>
                                    )
                                    }
                                    <Menu className={classes.regMenu} {...bindMenu(popupState)}>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                disabled={index === selectedIndex}
                                                onClick={(event) => closeMenu(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </React.Fragment>
                            )
                        }}
                    </PopupState>
                </div>
            )
        }
    },

];

export default function RenderCellGrid(props) {
    const rows = props.data
    const classes = FormStyle()
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [page, setPage] = React.useState(0);
    return (
        <div className={classes.fixedHeightTable}>
            <DataGrid
                className={classes.dataGrid}
                rows={rows}
                columns={columns}
                page={page}
                onPageChange={(params) => {
                    setPage(params.page);
                }}
                pageSize={14}
                pagination
                onSelectionModelChange={(newSelection) => {
                    setSelectionModel(newSelection.selectionModel);
                }}
                selectionModel={selectionModel}
            />
        </div>
    );
}

RenderCellGrid.propTypes = {
    data: PropTypes.array.isRequired,
};