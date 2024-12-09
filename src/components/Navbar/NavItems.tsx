import Button from "../ui/Button";
import Logo from "./Logo";

const NavItems: React.FC = () => {
    
    const brand = 'Short-It';

    return <nav>
        <Logo text={brand} />
        <Button>Login</Button>
        <Button>Sign Up</Button>
    </nav>
}

export default NavItems;