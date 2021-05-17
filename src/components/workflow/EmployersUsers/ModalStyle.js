import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: '10px 10px 25px rgb(42 139 242 / 10%), 15px 15px 35px rgb(42 139 242 / 5%), 10px 10px 50px rgb(42 139 242 / 10%);',
        padding: theme.spacing(2, 2, 2),
    },
    text: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: '14.0351px 0px 25px rgb(86 128 248 / 3%), 35.0877px 0px 70px rgb(86 128 248 / 5%), 23.8596px 5.61404px 50px rgb(0 0 0 / 2%);',
        padding: theme.spacing(2, 2, 2),
    },
    form: {
        textAlign: 'center',
    },
    uId: {
        color: '#2A8BF2',
    },
    topMargin: {
        marginTop: 5,
    }
}));