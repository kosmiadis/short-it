import Page from "../../components/ui/Page";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import Group from "../../components/ui/Group";

const HomePage: React.FC = () => {
    return <Page>
        <Group direction="col">
            <Hero />
            <CallToAction />
        </Group>
    </Page>
}

export default HomePage;