import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        minWidth: 275,
        maxWidth: 350,
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
        '& .MuiSvgIcon-root':{
            fontSize: 28,
        },
        '& .MuiFormLabel-root': {
            '&.Mui-focused': {
                color: '#0d6efd',
            }
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(206, 212, 218)',
                borderWidth: 1.5,
            },
            '&:hover fieldset': {
                borderColor: 'rgb(134, 183, 254)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(134, 183, 254)',
            },
        },
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#0d6efd',
        width: theme.spacing(5.5),
        height: theme.spacing(5.5),
    },
    checkBox: {
        marginLeft: 4,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    checkBoxLabel: {
        marginBottom: 6,
    },
    icon: {
        border: '1px solid rgba(0,0,0,.25)',
        borderRadius: 3.5,
        width: 14,
        height: 14,
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
    checkedIcon: {
        borderRadius: 3.5,
        backgroundColor: '#0d6efd',
        '&:before': {
            display: 'block',
            width: 14,
            height: 14,
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
    formInput: {
        borderRadius: 3.5,
        borderColor: '#e1e5eb',
        '& label': {
            fontSize: 14,
        },
        '& .MuiInputBase-root fieldset legend': {
            '& span': {
                fontSize: 10,
            },
        },
    },
    submitBtn: {
        color: 'white',
        textTransform: 'none',
        backgroundColor: '#0d6efd',
        '&:hover': {
            backgroundColor: '#005EEA',
        }
    },
    resetPassword: {
        marginTop: 8,
        textAlign: 'center',
        fontSize: 14,
        '& a': {
            color: '#0d6efd',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            }
        }
    },
    helpText: {
        color: 'rgb(108, 117, 125)',
        fontSize: 12,
        margin: '-2px 2px 8px 2px',
    }
}));

