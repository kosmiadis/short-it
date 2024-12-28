import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../Auth/Protected/Protected";
import { useAuth } from "../../../store/AuthProvider";
import AlertBox from "../../ui/AlertBox/AlertBox";
import { useState } from "react";

const UserActions: React.FC<{id: string}> = ({ id }) => {
    const navigate = useNavigate()

    const [showAlert, setShowAlert] = useState(false);

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: logout,
        onError: () => {
            setShowAlert(true);
        },
        onSuccess: () => {
            setShowAlert(false);
            clearAuth();
            navigate('/');
        }
    })

    const handleClick = () => {
        navigate('/dashboard');
    }

    const handleLogout = () => {
        mutate();
    }

    const { clearAuth } = useAuth();

    return <div id={id}>
        {
            location.pathname === '/dashboard' && 
            <Button onClick={handleLogout} btnType="action-btn">Logout</Button>
        }
        {
            location.pathname !== '/dashboard' && 
            <Button onClick={handleClick} btnType="action-btn">Dashboard</Button>
        }
        {
            showAlert && 
            <AlertBox type={isPending ? 'pending' : isError ? 'error': 'success'} title="Logout Failed" text={error?.message || 'Something went wrong!'}/>        
        }
    </div>
}

export default UserActions;