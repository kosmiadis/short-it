import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const UserActions: React.FC<{id: string}> = ({ id }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/dashboard');
    }

    const handleLogout = () => {
        console.log('logout btn clicked');
    }

    
    
    return <div id={id}>
        {
            location.pathname === '/dashboard' && 
            <Button onClick={handleLogout} btnType="action-btn">Logout</Button>
        }
        {
            location.pathname !== '/dashboard' && 
            <Button onClick={handleClick} btnType="action-btn">Dashboard</Button>
        }
            
    </div>
}

export default UserActions;