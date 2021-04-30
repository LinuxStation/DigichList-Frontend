import React from 'react';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { FormInput, StyledCheckbox, SubmitBtn, ResetLink, FormCard } from '../../components/auth/FormElements'

export default function auth() {
    return (
        <FormCard
            icon={<LockOpenOutlinedIcon/>}
            title='Login in Admin panel'
            components={
                <form>
                    <FormInput type="email" label="Email Address" autoComplete='email' />
                    <FormInput type="password" label="Password" autoComplete='password' />
                    <StyledCheckbox />
                    <SubmitBtn text='Login' />
                    <ResetLink text='Forgot Password?' to='/forgot-password' />
                </form>
            }
        />
    )
}