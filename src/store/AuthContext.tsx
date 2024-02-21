import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type UserAuth = {
    email: string,
    accessToken: string,
    firstName: string,
    lastName: string
}

type AuthContextType = {
    auth?: UserAuth,
    setAuth: Dispatch<SetStateAction<UserAuth>>
}

const initialState :AuthContextType = {
    auth: {
        email: '',
        accessToken: '',
        firstName: '',
        lastName: '',
    },
    setAuth: () => {}
} as {
    auth?: UserAuth,
    setAuth: Dispatch<SetStateAction<UserAuth>>
}


const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<UserAuth>({ email: '', accessToken: '', firstName: '', lastName: '' });
    
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;