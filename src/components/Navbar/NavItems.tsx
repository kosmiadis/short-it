import NavActions from './NavActions';
import Logo from "./Logo";

const NavItems: React.FC = () => {
    
    const brand = 'Short-It';

    return <nav className="flex justify-content-between">
        <Logo text={brand} />
        <NavActions />
    </nav>
}

export default NavItems;