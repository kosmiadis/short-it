import { ReactNode, useEffect } from "react"
import { useAuth } from "../../store/AuthProvider"
import { Navigate } from "react-router-dom";
import {  useMutation } from "@tanstack/react-query";
import { AuthUserResponse } from "../../models/UserAuth";
import LoadingIndicator from "../ui/LoadingIndicator/LoadingIndicator";
import './Protected.css';

const Protected: React.FC<{children: ReactNode }> = ({children}) => {
    
    const { isAuthorized, setIsAuthorized, setAuthUser } = useAuth();

    const { mutate, isPending, isError } = useMutation({
        mutationFn: checkAuth,
        onSuccess: (response) => {
    
            setIsAuthorized(true);
            setAuthUser({user: response!.user, message: response!.message})
        }
    })

    useEffect(() => {
         mutate();
    }, [])

    if (isPending) {
        return <div className="protected_loading">
            <LoadingIndicator size="large"/>
            <span id='loading_sub_text'>Loading...</span>
        </div>
    }

    //TODO ***
    //later add a special error page for unauthorized
    if (isError) {
       return <Navigate to='/' />
    }

    if (!isAuthorized && !isPending) {
        {console.log('it run')}
       return <Navigate to='/login' />
    }
    
    if (isAuthorized && !isPending) {
        return <>
            {children}
        </>
    }    
}

export const checkAuth = async (): Promise<AuthUserResponse>  => {
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