import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import Container from '@material-ui/core/Container';
import { ConfirmPassword } from '../../components/auth/Form'

const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        maxWidth: 350,
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
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
    icons: {
        fontSize: 28,
    },
}));

export default function ResetPassword() {
    const styles = useStyle();
    return(
        <Container component='main' maxWidth='xs' >
            <Card className={styles.root}>
                <CardContent className={styles.cardContent}>
                    <Avatar className={styles.avatar}>
                        <VpnKeyOutlinedIcon className={styles.icons} />
                    </Avatar>
                    <Typography component="h2" variant="h6">
                        New Password 
                    </Typography>
                    <ConfirmPassword/>
                </CardContent>
            </Card>
        </Container>
    )
}