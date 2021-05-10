import { makeStyles } from "@material-ui/core/styles";

export const tableBody =  makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
        boxShadow: '14.0351px 0px 25px rgba(86, 128, 248, 0.03), 35.0877px 0px 70px rgba(86, 128, 248, 0.05), 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02)',
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    tableBody: {
        "& .Mui-selected": {
            backgroundColor: 'rgba(42, 139, 242, 0.50) !important',
            "&:hover": {
                backgroundColor: 'rgba(42, 139, 242, 0.60) !important',
            }
        }
    },
    indeterminateIcon: {
        borderRadius: 3.5,
        position: 'relevant',
        width: 18,
        height: 18,
        backgroundColor: '#0d6efd',
        '&:before': {
            top: -1,
            left: 'auto',
            right: 'auto',
            color: '#fff',
            position: 'absolute',
            display: 'block',
            width: 10,
            height: 10,
            transform: 'scale(0.75)',
            content: '"—"',
        },
        'input:hover ~ &': {
            color: '#005EEA',
        },
    },
    checkedIcon: {
        borderRadius: 3.5,
        backgroundColor: '#0d6efd',
        '&:before': {
            display: 'block',
            width: 18,
            height: 18,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#005EEA',
        },
    },
    icon: {
        border: '1px solid rgba(0,0,0,.25)',
        borderRadius: 3.5,
        width: 18,
        height: 18,
        backgroundColor: '#f5f8fa',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    tableCheckbox: {
        marginLeft: 4,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
}));

export const tableHand = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                color: '#fff',
                background: 'linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%)',
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
    tooltipIcon: {
        color: '#fff',
    },
    tableHeadGrid: {
        marginRight: 2,
        justifyContent: 'flex-end',
    }
}));