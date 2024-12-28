import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"
import { UserAuthResponse } from "../types/UserAuthResponse";

type AuthContext = {
    isAuthorized: boolean,
    isAuthLoading: boolean,
    authUser: UserAuthResponse | null
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
    setAuthUser: Dispatch<SetStateAction<UserAuthResponse>>,
    setIsAuthLoading: Dispatch<SetStateAction<boolean>>,
    clearAuth: () => void,
}

export const ThemeCtx = createContext<AuthContext>({
    isAuthorized: false,
    authUser: null,
    isAuthLoading: true,
    setIsAuthorized: () => {},
    setAuthUser: () => {},
    setIsAuthLoading: () => {},
    clearAuth: () => {},

})

export const useAuth = () => useContext<AuthContext>(ThemeCtx);

const AuthProvider: React.FC<{children: ReactNode }> = ({ children }) => {

    const [ isAuthorized, setIsAuthorized] = useState(false);
    const [ authUser, setAuthUser ] = useState<UserAuthResponse>(null);
    const [ isAuthLoading, setIsAuthLoading ] = useState(true);

    const clearAuth = () => {
        setIsAuthorized(false);
        setAuthUser(null);
    }


    const authValue: AuthContext = {
        isAuthorized,
        authUser,
        isAuthLoading,
        setIsAuthLoading,
        setIsAuthorized,
        setAuthUser,
        clearAuth
    }

    return <ThemeCtx.Provider value={authValue}>
        {children}
    </ThemeCtx.Provider>
}

export default AuthProvider;