import InputArea from "../../components/ui/InputArea/InputArea";
import Page from "../../components/ui/Page";
import AuthFormActions from "../../components/Auth/AuthFormActions";
import { MutationFunction, useMutation } from "@tanstack/react-query";
import { AuthResponse } from "../../models/AuthResponse";
import { FormEventHandler, useRef } from "react";
import ErrorBlock from "../../components/ui/ErrorBlock/ErrorBlock";

const Signup: React.FC = () => {

    const fullNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: signup,
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

    return <Page id='signup_page' pageTitle="Create an Account">
        <Page.PageSection>
            <form onSubmit={handleSubmit} className="auth_form">
            {isError && <ErrorBlock text={error.message || 'Something went wrong!'}/>}
                <InputArea inputRef={fullNameRef} id='fullName' label="Full Name"/>
                <InputArea inputRef={emailRef} id="email" type="email" label="Email"/>
                <InputArea inputRef={passwordRef} id="password" type="password" label="Password"/>
                <AuthFormActions isPending={isPending}/>
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
}



export default Signup;