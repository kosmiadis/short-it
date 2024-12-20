import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"
import { AuthUserResponse } from "../models/UserAuth";

type AuthContext = {
    isAuthorized: boolean,
    authUser: AuthUserResponse | null
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
    setAuthUser: Dispatch<SetStateAction<AuthUserResponse>>,

}

export const ThemeCtx = createContext<AuthContext>({
    isAuthorized: false,
    authUser: null,
    setIsAuthorized: () => {},
    setAuthUser: () => {},

})

export const useAuth = () => useContext<AuthContext>(ThemeCtx);

const AuthProvider: React.FC<{children: ReactNode }> = ({ children }) => {

    const [ isAuthorized, setIsAuthorized] = useState(false);
    const [ authUser, setAuthUser ] = useState<AuthUserResponse>(null);

    const authValue: AuthContext = {
        isAuthorized,
        authUser,
        setIsAuthorized,
        setAuthUser,
       
    }

    return <ThemeCtx.Provider value={authValue}>
        {children}
    </ThemeCtx.Provider>
}

export default AuthProvider;