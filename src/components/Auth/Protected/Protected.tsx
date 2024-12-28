import { ReactNode, useEffect } from "react"
import { useAuth } from "../../../store/AuthProvider"
import { Navigate, useNavigate } from "react-router-dom";
import {  useMutation } from "@tanstack/react-query";
import { UserAuthResponse } from "../../../types/UserAuthResponse";
import { LogoutResponse } from "../../../types/LogoutResponse";
import LoadingIndicatorTexted from "../../ui/LoadingIndicatorTexted/LoadingIndicatorTexted";

const Protected: React.FC<{children: ReactNode }> = ({children}) => {
    
    const { isAuthorized, setIsAuthorized, setAuthUser, isAuthLoading, setIsAuthLoading } = useAuth();
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: checkAuth,
        onSuccess: (response) => {
            setIsAuthLoading(false);
            setIsAuthorized(true);
            setAuthUser({ user: response!.user, message: response!.message })
        },
        onError: () => {
            navigate('/login')
        }
    })

    useEffect(() => {
         mutate();
    }, [])

    if (isPending || isAuthLoading) {
        return <div className="protected_loading"><LoadingIndicatorTexted size='large' loadingText="Loading..."/></div>
    }

    if (!isAuthorized && !isPending) {
       return <Navigate to='/login' />
    }
    
    if (isAuthorized && !isPending) {
        return <>
            {children}
        </>
    }
}

export const checkAuth = async (): Promise<UserAuthResponse>  => {
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

export const logout = async (): Promise<LogoutResponse> => {
    const req = await fetch('http://localhost:3000/auth/logout', {
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