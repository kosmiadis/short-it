import Button from "../ui/Button"
import LoadingIndicator from "../ui/LoadingIndicator/LoadingIndicator";

const AuthFormActions: React.FC<{isPending: boolean}> = ({isPending}) => {
    return <div className="auth_form_actions">
        <Button disabled={isPending} type="reset" btnType="action-btn">
            Reset
        </Button>
        <Button disabled={isPending} type="submit" btnType="action-btn">
            {!isPending && <>Login</> }
            {isPending && <LoadingIndicator size="small"/>} 
        </Button>
    </div>
}

export default AuthFormActions;