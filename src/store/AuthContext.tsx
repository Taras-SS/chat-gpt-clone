import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type UserAuth = {
    email: string,
    password: string
}

const initialState = {
    auth: {
        email: '',
        password: ''
        
    },
    setAuth: () => {}
} as {
    auth?: UserAuth,
    setAuth: Dispatch<SetStateAction<UserAuth>>
    }


const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<UserAuth>({ email: '', password: '' });
    
    
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;