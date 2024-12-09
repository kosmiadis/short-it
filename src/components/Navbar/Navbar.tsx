import { useTheme } from "../../store/ThemeProvider";
import Button from "../ui/Button";
import NavItems from "./NavItems";

const Navbar: React.FC = () => {
  
  const { toggleTheme } = useTheme();
  
  return <header>
      <NavItems />
      <Button onClick={toggleTheme}>Toggle Theme</Button>
  </header>
}

export default Navbar;
