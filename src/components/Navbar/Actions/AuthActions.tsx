import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const AuthActions: React.FC<{id: string}> = ({id}) => {
    
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

export default AuthActions;