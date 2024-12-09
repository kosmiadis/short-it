import ThemeProvider, { useTheme } from "../../store/ThemeProvider";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
const CoreLayout: React.FC = () => {

    const { theme } = useTheme();

    return <ThemeProvider>
        <div className={theme}>
            <Navbar />
            <Outlet />
        </div>
    </ThemeProvider>
}

export default CoreLayout;