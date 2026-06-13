import {  createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider =({children}) => {
    const[user] = useState({
        name:"Demo User"
    });

    const [isLoading , setIsLoading] = useState(false);

   
    return (
        <AuthContext.Provider value={{user, isLoading, setIsLoading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;