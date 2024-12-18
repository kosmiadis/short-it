import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/ui/Button";
import { useTheme } from "../../store/ThemeProvider";
import './CoreErrorPage.css';


const CoreErrorPage: React.FC = () => {
    
    const {theme} = useTheme();
    
    return <div id='core-error-page' className={theme}>
        <Navbar />
        <div id='error-hero'>
            <h2>Oops! The page you are looking for does not exist.</h2>
            <Link to='/' id='go-home-btn'><Button btnType="action-btn">Go to Home</Button></Link>
        </div>
    </div>
}

export default CoreErrorPage;