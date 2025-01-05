import Page from "../../components/ui/Page/Page";
import TopBar from "../../components/Dashboard/TopBar/TopBar";
import './Dashboard.css';
import Analytics from "../../components/Dashboard/Analytics/Analytics";
import CreateLink from "../../components/Dashboard/Create/CreateLink/CreateLink";
import { Link } from "react-router-dom";
import LatestUrls from "../../components/Dashboard/LatestUrls/LatestUrls";

const Dashboard: React.FC = () => {

    return <Page id='dashboard_page'>
        <TopBar />
        <Page.PageSection sectionTitle="Your Latest Urls" >
            <Link className="view_all" to='/urls'>View All</Link>
            <LatestUrls />
        </Page.PageSection>
        <Page.PageSection sectionTitle="Analytics" >
                <Analytics />
            </Page.PageSection>

        <Page.PageSection sectionTitle="Shorten a URL" >
            <CreateLink />
        </Page.PageSection>
    </Page>
}

export default Dashboard;