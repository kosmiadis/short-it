import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const UserActions: React.FC<{id: string}> = ({ id }) => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate('/dashboard');
    }
    
    return <div id={id}>
        <Button onClick={handleClick} btnType="action-btn">Dashboard</Button>
    </div>
}

export default UserActions;