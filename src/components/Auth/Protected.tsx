import { ReactNode, useEffect } from "react"
import { useAuth } from "../../store/AuthProvider"
import { Navigate } from "react-router-dom";
import {  useMutation } from "@tanstack/react-query";
import { AuthUser } from "../../models/UserAuth";
import LoadingIndicator from "../ui/LoadingIndicator/LoadingIndicator";

const Protected: React.FC<{children: ReactNode }> = ({children}) => {
    
    const { isAuthorized, authUser, setIsAuthorized, setAuthUser } = useAuth();

    const { mutate, isPending, isError } = useMutation({
        mutationFn: checkAuth
    })

    useEffect(() => {
        mutate();

    }, [])

    if (isPending) {
        return <div><LoadingIndicator size="large"/></div>
    }

    //TODO ***
    //later add a special error page for unauthorized
    if (isError) {
       return <Navigate to='/' />
    }

    if (!isAuthorized) {
       return <Navigate to='/login' />
    }
    
    if (isAuthorized) {
        return <>
            {children}
        </>
    }    
}

const checkAuth = async (): Promise<AuthUser>  => {
    const req = await fetch('http://localhost:3000/auth/me', {
        method: "GET",
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!req.ok) {
        throw await req.json();
    }
    return await req.json();
}

export default Protected;