import { useTheme } from "../../../store/ThemeProvider";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

const Unauthorized: React.FC = () => {

    const {theme} = useTheme();

    return <div id='core-error-page' className={theme}>
    <div id='error-hero'>
        <h2>Authorization Failed! Please try again later.</h2>
        <Link to='/' id='go-home-btn'><Button btnType="action-btn">Go to Home</Button></Link>
    </div>
</div>
}

export default Unauthorized;