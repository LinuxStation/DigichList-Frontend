import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import ConfirmPassword from './ConfirmPassword';
import ForgotPassword from './ForgotPassword';
import SecurityCode from './SecurityCode';
import '../../styles/auth/auth.scss';


export default function Auth() {
    return (
        <Router>
            <Route path="/auth/login" component={Login}/>
            <Route path="/auth/forgot-password" component={ForgotPassword} />
            <Route path="/auth/security-code/:id" component={SecurityCode} />
            <Route path="/auth/confirm-password" component={ConfirmPassword} />
            <Route exact path="/auth">
                <Redirect to="/auth/login"/>
            </Route>
        </Router>
    )
}