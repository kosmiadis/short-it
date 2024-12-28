import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button/Button";

const CallToAction: React.FC<{id: string}> = ({ id }) => {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/dashboard');
    }

    return <div id={id}>
        <p>Start Shortening URL's!</p>
        <div id='cta-actions'>
            <Button onClick={handleGetStarted} btnType='action-btn'>Get Started</Button>
            <Button btnType="learn-more-btn">Learn More</Button>
        </div>
    </div>
}

export default CallToAction;