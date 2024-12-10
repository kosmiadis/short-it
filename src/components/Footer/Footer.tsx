import { useTheme } from "../../store/ThemeProvider";
import Button from "../ui/Button";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Footer: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    
    return <footer className="flex">
        <Button className='no-bg' onClick={toggleTheme}>{theme === 'light' ? <MdLightMode color='black' /> : <MdOutlineLightMode color='white' />}</Button>
    </footer>
}

export default Footer;