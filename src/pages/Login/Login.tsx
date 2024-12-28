import { MutationFunction, useMutation } from "@tanstack/react-query";
import { AuthResponse } from "../../types/AuthResponse";
import AuthFormActions from "../../components/Auth/AuthFormActions/AuthFormActions";
import InputArea from "../../components/ui/InputArea/InputArea";
import Page from "../../components/ui/Page/Page";
import { FormEventHandler, useRef } from "react";
import ErrorBlock from "../../components/ui/ErrorBlock/ErrorBlock";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/AuthProvider";
import { UserAuthResponse } from "../../types/UserAuthResponse";


const Login: React.FC = () => {

    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const { authUser, setIsAuthorized, setAuthUser} = useAuth();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            setIsAuthorized(true);
            setAuthUser({ user: response!.user, message: response!.message })
            navigate('/dashboard');
        },
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (
            emailRef.current!.value.trim() !== '' &&
            passwordRef.current!.value.trim() !== ''
        ) {
            //exclamation mark signs that we know that the current value will not be undefined for sure.
            mutate({
                email: emailRef.current!.value, 
                password: passwordRef.current!.value,
            })
        }
    }

    if (authUser) {
        return <Navigate to='/dashboard' />
    }

    return <Page id='login_page'>
        <Page.PageSection>
            
            <form onSubmit={handleSubmit} className="auth_form">
                <h2>Login</h2>
                {isError && <ErrorBlock text={error.message || 'Something went wrong!'}/>}
                <InputArea inputRef={emailRef} id="email" label="Email" />
                <InputArea inputRef={passwordRef} id="password" label="Password" type="password" />
                <AuthFormActions formType='login' isPending={isPending} />
            </form>
        </Page.PageSection>
    </Page>
}

const login: MutationFunction<UserAuthResponse, {email: string, password: string}> = async ({email, password})  => {
    const req = await fetch('http://localhost:3000/auth/login', {
        method: "POST",
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!req.ok) {
        throw await req.json();
    }
    return await req.json();
}

export default Login;