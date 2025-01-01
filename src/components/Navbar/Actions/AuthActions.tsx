import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";

type AuthActionsProps = { id: string }

export default function AuthActions ({id}: AuthActionsProps)  {
    
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const handleSignup = ()=> {
        navigate('/signup');
    }

    return <div id={id}>
        <Button onClick={handleLogin} btnType="action-btn">Login</Button>
        <Button onClick={handleSignup} btnType="action-btn">Sign Up</Button>
    </div>
}