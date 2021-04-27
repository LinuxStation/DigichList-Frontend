import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Form from '../../components/auth/Form'
import '../../styles/auth/auth.scss';

const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        maxWidth: 500,
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function Auth() {
    const styles = useStyle();
    return (
        <Container component='main' maxWidth='xs' className={styles.container}>
            <Card className={styles.root}>
                <CardContent className={styles.cardContent}>
                    <Avatar className={styles.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                </Typography>
                    <Form />
                </CardContent>
            </Card>
        </Container>

    )
}