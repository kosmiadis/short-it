import Group from "../ui/Group";
import Button from "../ui/Button";

const NavAction: React.FC = () => {
    return <Group direction="row">
        <Button>Login</Button>
        <Button>Sign Up</Button>
    </Group>
}

export default NavAction;