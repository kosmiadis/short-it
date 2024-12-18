import Navigation from "./Navigation";
import NavActions from "./NavActions";
import './Navbar.css';

const Navbar: React.FC = () => {
  return <header>
    <Navigation id='navigation'/>
    <NavActions id='nav-actions'/>
  </header>
}

export default Navbar;
