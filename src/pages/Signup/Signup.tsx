import InputArea from "../../components/ui/InputArea/InputArea";
import Page from "../../components/ui/Page/Page";
import AuthFormActions from "../../components/Auth/AuthFormActions/AuthFormActions";
import { MutationFunction, useMutation } from "@tanstack/react-query";
import { AuthResponse } from "../../types/AuthResponse";
import { FormEventHandler, useRef } from "react";
import ErrorBlock from "../../components/ui/ErrorBlock/ErrorBlock";
import { useNavigate } from "react-router-dom";

export default function Signup () {

    const fullNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: signup,
        onSuccess: () => {
            navigate('/dashboard');
        }
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
            event.preventDefault();
            if (
                fullNameRef.current!.value.trim() !== '' &&
                emailRef.current!.value.trim() !== '' &&
                passwordRef.current!.value.trim() !== ''
            ) {
                //exclamation mark signs that we know that the current value will not be undefined for sure.
                mutate({
                    fullName: fullNameRef.current!.value,
                    email: emailRef.current!.value, 
                    password: passwordRef.current!.value,
                })
            }
    }

    return <Page id='signup_page'>
        <Page.PageSection>
            <form onSubmit={handleSubmit} className="auth_form">
                <h2>Signup</h2>
                {isError && <ErrorBlock text={error.message || 'Something went wrong!'}/>}
                <InputArea inputRef={fullNameRef} id='fullName' label="Full Name"/>
                <InputArea inputRef={emailRef} id="email" type="email" label="Email"/>
                <InputArea inputRef={passwordRef} id="password" type="password" label="Password"/>
                <AuthFormActions formType='signup' isPending={isPending}/>
            </form>
        </Page.PageSection>
    </Page>
}

const signup: MutationFunction<AuthResponse, {fullName: string, email: string, password: string}> = async ({fullName, email, password})  => {
    const req = await fetch('http://localhost:3000/auth/signup', {
        method: "POST",
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
    });
    if (!req.ok) {
        throw await req.json();
    }
    return await req.json();
};