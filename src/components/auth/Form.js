import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
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
            width: 16,
            height: 16,
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
});
function StyledCheckbox(props) {
    const styles = useStyles();
    return (
        <FormControlLabel
            className={styles.checkBoxLabel}
            control={<Checkbox
                className={styles.checkBox}
                disableRipple
                color='default'
                value="remember"
                checkedIcon={<span className={styles.icon, styles.checkedIcon} />}
                icon={<span className={styles.icon} />}
                {...props}
            />}
            label="Remember me"
        />
    )
}

function SubmitBtn(props) {
    SubmitBtn.propTypes = {
        text: PropTypes.string,
    }
    const styles = useStyles();
    return (
        <Button
            className={styles.submitBtn}
            type="submit"
            fullWidth
            disableRipple
            variant="contained">
            {props.text}
        </Button>
    )
}
function HelpingText(props) {
    HelpingText.propTypes = {
        text: PropTypes.string,
        component: PropTypes.component,
    }
    const styles = useStyles();
    return (
        <Typography variant="body2" className={styles.helpText}>
           {props.text}  {props.component}
        </Typography>
    )
}
function ResetLink(props) {
    ResetLink.propTypes = {
        text: PropTypes.string,
        to: PropTypes.string,
    }
    const styles = useStyles();
    return (
        <Typography className={styles.resetPassword}>
            <Link to={`/auth${props.to}`}>
                {props.text}
            </Link>
        </Typography>
    )
}


function FormInput(props) {
    FormInput.propTypes = {
        type: PropTypes.string,
        label: PropTypes.string,
        autoComplete: PropTypes.string
    }
    const styles = useStyles();
    return (
        <TextField
            className={styles.formInput}
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            name={props.type}
            label={props.label}
            type={props.type}
            id={props.type}
            autoComplete={props.autoComplete}
        />
    )
}

export class LoginForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form>
                <FormInput type="email" label="Email Address" autoComplete='email' />
                <FormInput type="password" label="Password" autoComplete='password' />
                <StyledCheckbox />
                <SubmitBtn text='Login' />
                <ResetLink text='Forgot Password?' to='/forgot-password' />
            </form>
        )
    }
}
export class ForgotPassword extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form>
                <FormInput type="email" label="Email" autoComplete='email' />
                <HelpingText text='By clicking "Reset Password", we will send a link to reset the password' />
                <SubmitBtn text='Reset Password'/>
                <ResetLink text='Back to Login' to='/login' />
            </form>
        )
    }
}

export class ConfirmPassword extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form>
                <FormInput type="password" label="Password" autoComplete='password' />
                <FormInput type="password" label="Confirm Password" autoComplete='password' />
                <HelpingText text='Create a new password that is at least 6 characters long.' />
                <SubmitBtn text='Confirm'/>
                <ResetLink text='Cancel' to='/login' />
            </form>
        )
    }
}

export class Security extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form>
                <FormInput type="code" label="Code" autoComplete='code' />
                <HelpingText 
                    text='If the code is not received within two minutes, press:' 
                    component={<a href="#">Send again</a>} />
                <SubmitBtn text='Continue'/>
                <ResetLink text='Cancel' to='/login' />
            </form>
        )
    }
}

