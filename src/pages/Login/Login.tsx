import { MutationFunction, useMutation } from "@tanstack/react-query";
import { AuthResponse } from "../../models/AuthResponse";
import AuthFormActions from "../../components/Auth/AuthFormActions";
import InputArea from "../../components/ui/InputArea/InputArea";
import Page from "../../components/ui/Page";
import { FormEventHandler, useRef } from "react";
import ErrorBlock from "../../components/ui/ErrorBlock/ErrorBlock";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {

    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: login,
        onSuccess: () => {
            navigate('/dashboard');
        }
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

    return <Page id='login_page' pageTitle="Login to Existing Account">
        <Page.PageSection>
            
            <form onSubmit={handleSubmit} className="auth_form">
                {isError && <ErrorBlock text={error.message || 'Something went wrong!'}/>}
                <InputArea inputRef={emailRef} id="email" label="Email" />
                <InputArea inputRef={passwordRef} id="password" label="Password" type="password" />
                <AuthFormActions isPending={isPending} />
            </form>
            
        </Page.PageSection>
    </Page>
}

const login: MutationFunction<AuthResponse, {email: string, password: string}> = async ({email, password})  => {
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