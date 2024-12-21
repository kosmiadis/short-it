import Button from "../ui/Button"
import LoadingIndicator from "../ui/LoadingIndicator/LoadingIndicator";

type FormType = 'login' | 'signup'

const AuthFormActions: React.FC<{isPending: boolean, formType: FormType}> = ({
    isPending,
    formType
}) => {
    return <div className="auth_form_actions">
        <Button disabled={isPending} type="reset" btnType="action-btn">
            Reset
        </Button>
        <Button disabled={isPending} type="submit" btnType="action-btn">
            {!isPending && <>{formType === 'login' ? 'Login' : 'Signup'}</> }
            {isPending && <LoadingIndicator size="small"/>} 
        </Button>
    </div>
}

export default AuthFormActions;