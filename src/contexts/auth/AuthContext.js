import React, {useContext, useState, useEffect} from 'react';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider ({children}){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    async function login(email, password, name){
        return 
    }
    function logout (){
        return 
    }
    function resetPassword(email){
        return
    }

    const value = {
        currentUser,
        login,
        logout,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}