import { useAuth } from "../../../store/AuthProvider"
import './TopBar.css';
import userProfileImage from '../../../assets/user.png';

export default function TopBar () {

    const { authUser } = useAuth();

    return <div className="top_bar">
            <h2>Dashboard</h2>
            {authUser && <p className="welcome_message"><span id="auth_user_email">{authUser.message}</span><img className="icon icon-sm" src={userProfileImage}/></p>}
    </div>
}