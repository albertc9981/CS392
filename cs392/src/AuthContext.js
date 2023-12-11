// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined);
//make sure it matches the auth requirement
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
    // use useState to set isLogin status
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}
