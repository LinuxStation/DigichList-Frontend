import React from 'react';

export default function Temp() {
    return (
        <div>
            <h1>Available routes</h1>
            <ui>
                <li>
                    1. /aut
                    <li style={{marginLeft: '10px'}}>
                        1.1. /aut/login
                    </li>
                    <li style={{marginLeft: '10px'}}>
                        1.2. /aut/forgot-password
                    </li>
                    <li style={{marginLeft: '10px'}}>
                        1.3. /aut/security-code
                    </li>
                    <li style={{marginLeft: '10px'}}>
                        1.4. /aut/ConfirmPassword
                    </li>
                </li>
                <li>
                    2. /home
                </li>
            </ui>
        </div>
    )
}