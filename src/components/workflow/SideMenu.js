import React, { useState } from "react";

import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

import WorkflowStyle from "./WorkflowStyle";
import PropTypes from 'prop-types';

import ListMenuItems from "./ListMenuItems";

//Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';


export default function SideMenu(props) {
    SideMenu.propTypes = {
        body: PropTypes.object,
    }
    
    const classes = WorkflowStyle();
    const [open, setOpen] = useState(false);

    const handleCloseDraw  = () => {
        setOpen(false);
    }
    const handleDrawer = () => {
        (!open) ? setOpen(true) : setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawer}>
                        {open ? <ChevronLeftIcon className={classes.menuIcon} /> : <MenuIcon className={classes.menuIcon} />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.list} >
                    <ListMenuItems handleCloseDraw={handleCloseDraw}/>
                </List>
                <List className={`${classes.list} ${classes.logoutList}`}>
                    <ListItem button>
                        <ListItemIcon className={classes.menuIcon}>
                            <PowerSettingsNewOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listText} primary="Log Out" />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <Container maxWidth="xl" className={classes.container}>
                    {props.body}
                </Container>
            </main>
        </div>
    );
}
