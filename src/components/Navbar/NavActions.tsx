import { useAuth } from "../../store/AuthProvider";
import AuthActions from "./Actions/AuthActions";
import UserActions from "./Actions/UserActions";

type NavActionsProps = {
    id: string
}

export default function NavActions ({ id }: NavActionsProps) {

    const { isAuthorized } = useAuth();

    let content;

    if (!isAuthorized) {
        content = <AuthActions id='auth-actions'/>
    }

    if (isAuthorized) {
        content = <UserActions id='user-actions'/>
    }
    
    return <div id={id}>
        {content}
    </div>
}