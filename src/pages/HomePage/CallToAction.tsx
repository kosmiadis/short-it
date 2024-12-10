import Button from "../../components/ui/Button";
import Group from "../../components/ui/Group";

const CallToAction: React.FC = () => {
    
    return <Group direction="col">
        <p className="jost-text text-xl no-margin">Start Shortening URL's</p>
        <Group direction="row">
            <Button className="min-content no-margin">Get Started</Button>
            <Button className="min-content no-margin no-bg">Learn More</Button>
        </Group>
    </Group>
}

export default CallToAction;