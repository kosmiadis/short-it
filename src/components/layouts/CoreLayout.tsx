import { useTheme } from "../../store/ThemeProvider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Wrapper from "../ui/Wrapper";
import './CoreLayout.css';

const CoreLayout: React.FC = () => {

    const { theme } = useTheme();

    return <div id='core-layout' className={theme}>
            <Navbar />
            <Wrapper>
                <Outlet />
            </Wrapper>
            <Footer />
    </div>
}

export default CoreLayout;