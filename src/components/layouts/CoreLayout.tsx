import { useTheme } from "../../store/ThemeProvider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Wrapper from "../ui/Wrapper";

const CoreLayout: React.FC = () => {

    const { theme } = useTheme();

    return <div className={theme + ' flex-col screen-h-w'}>
            <Navbar />
            <Wrapper>
                <Outlet />
            </Wrapper>
            <Footer />
    </div>
}

export default CoreLayout;