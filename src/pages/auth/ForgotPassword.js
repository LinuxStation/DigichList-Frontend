import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FormInput, HelpingText, SubmitBtn, ResetLink, FormCard } from '../../components/auth/FormElements'


export default class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async sendToMail() {
        let templateParams = {
            message: '123213',
            mail: this.state.mail,
        };
       await emailjs.send('service_08tnqwp', 'template_6gzqjcs', templateParams, 'user_GRPybxcZZu8qPlh4lFr1o')
            .then((response) => {
                console.log('Mail send: ', response.status, response.text);
            }, (err) => {
                console.log('Send failed: ', err);
            });
        window.location='/auth/security-code'
    }
    handleSubmit(event) {
        this.sendToMail()
        event.preventDefault()
    }
    handleChange(event) {
        this.setState({ mail: event.target.value })
    }

    render() {
        return (
            <FormCard
                icon={<LockOutlinedIcon />}
                title="Forgot Password"
                components={
                    <form onSubmit={this.handleSubmit}>
                        <FormInput type="email" value={this.state.mail} onChange={this.handleChange} label="Email" autoComplete='email' />
                        <HelpingText text='By clicking "Reset Password", we will send a link to reset the password' />
                        <SubmitBtn text='Reset Password' />
                        <ResetLink text='Back to Login' to='/login' />
                    </form>
                }
            />
        )
    }
}