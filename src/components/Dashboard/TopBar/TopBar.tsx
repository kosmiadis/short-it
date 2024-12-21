import { useAuth } from "../../../store/AuthProvider"
import './TopBar.css';

type Props = {
    title: string,
}

export default function TopBar ({ title }: Props) {

    const { authUser } = useAuth();

    return <div className="top_bar">
            <h2>{title}</h2>
            {authUser && <span>{authUser.message}</span>}
    </div>
}