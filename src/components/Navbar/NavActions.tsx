import { useAuth } from "../../store/AuthProvider";
import AuthActions from "./Actions/AuthActions";
import UserActions from "./Actions/UserActions";

const NavActions: React.FC<{id: string}> = ({ id }) => {

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

export default NavActions;