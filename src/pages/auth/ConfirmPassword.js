import React from 'react';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { FormInput, HelpingText, SubmitBtn, ResetLink, FormCard } from '../../components/auth/FormElements'

export default function ResetPassword() {
    return (
        <FormCard
            icon={<VpnKeyOutlinedIcon />}
            title="New Password"
            components={
                <form>
                    <FormInput type="password" label="Password" autoComplete='password' />
                    <FormInput type="password" label="Confirm Password" autoComplete='password' />
                    <HelpingText text='Create a new password that is at least 6 characters long.' />
                    <SubmitBtn text='Confirm' />
                    <ResetLink text='Cancel' to='/login' />
                </form>
            }
        />
    )
}