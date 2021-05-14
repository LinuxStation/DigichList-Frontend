import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import WorkflowStyle from "./WorkflowStyle";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';


export default function ListMenuItems(props) {
    ListMenuItems.propTypes = {
        handleCloseDraw: PropTypes.func,
    }
    
   
    const classes = WorkflowStyle();
    const location = useLocation();
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
            text: "Employers",
            icon: <WorkOutlineIcon />,
            href: "/workflow/employers-users"
        },
        {
            text: "Defects",
            icon: <BugReportOutlinedIcon />,
            href: "/workflow/defects"
        },
    ]
    const handleSelect = (event, index) => {
        setSelected(index)
        props.handleCloseDraw()
    }

    return (
        itemsList.map((item, index) => {
            const { text, icon, href } = item;
            return (
                <Link key={text} to={href} className={classes.listLink}>
                    <ListItem button key={text} onClick={event => handleSelect(event, index)} selected={selected === index || href == location.pathname}>
                        {icon && <ListItemIcon className={classes.menuIcon}> {icon} </ListItemIcon>}
                        <ListItemText className={classes.listText} primary={text} />
                    </ListItem>
                </Link>
            )
        })
    )
}