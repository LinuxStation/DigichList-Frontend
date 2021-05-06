import React, { useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
// import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

import WorkflowStyle from "./WorkflowStyle";
import PropTypes from 'prop-types';

//Icons
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Dosis',
            'sans-serif'
        ].join(','),
    },
})


export default function SideMenu(props) {
    SideMenu.propTypes = {
        body: PropTypes.object,
    }

    const classes = WorkflowStyle();
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState();

    const itemsList = [
        {
            text: "Dashboard",
            icon: <DashboardOutlinedIcon />,
            href: "/workflow/dashboard"
        },
        {
            text: "Admins",
            icon: <SupervisorAccountIcon />,
            href: "/workflow/admin-users"
        },
        {
            text: "Workers",
            icon: <WorkOutlineIcon />,
            href: "/workflow/worker-users"
        },
        {
            text: "Defects",
            icon: <BugReportOutlinedIcon />,
            href: "/workflow/defects"
        },
    ]

    const handleDrawer = () => {
        (!open) ? setOpen(true) : setOpen(false);
    };
    const handleSelect = (event, index) => {
        setSelected(index);
    }

    return (
        <ThemeProvider theme={theme}>
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
                        {itemsList.map((item, index) => {
                            const { text, icon, href } = item;
                            return (
                                <Link key={text} to={href} className={classes.listLink}>
                                    <ListItem button key={text} onClick={event => handleSelect(event, index)} selected={selected === index}>
                                        {icon && <ListItemIcon className={classes.menuIcon}> {icon} </ListItemIcon>}
                                        <ListItemText className={classes.listText} primary={text} />
                                    </ListItem>
                                </Link>
                            )
                        })}
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
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        {props.body}
                    </Container>
                </main>
            </div>
        </ThemeProvider>
    );
}
