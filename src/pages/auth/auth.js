import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import ConfirmPassword from './ConfirmPassword';
import ForgotPassword from './ForgotPassword';



export default function Auth() {
    return (
        <Router>
            <Route path="/Auth/login" component={Login} />
            <Route path="/Auth/forgot-password" component={ForgotPassword} />
            <Route path="/Auth/code" component={ConfirmPassword} />
            <Route path="/Auth/confirm-password" component={ConfirmPassword} />
        </Router>
    )
}