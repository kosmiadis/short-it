import Page from "../../components/ui/Page";
import TopBar from "../../components/Dashboard/TopBar/TopBar";
import UrlsList from "../../components/Dashboard/UrlsList/UrlsList";

const Dashboard: React.FC = () => {
    return <Page id='dashboard_page'>
        <TopBar title="Dashboard" />
        <UrlsList />
    </Page>
}

export default Dashboard;