import LoadingIndicatorTexted from "../../components/ui/LoadingIndicatorTexted/LoadingIndicatorTexted";
import Page from "../../components/ui/Page/Page";
import UrlsTable from "../../components/Urls/UrlsTable/UrlsTable";
import { useUrls } from "../../store/UrlsLoaderProvided";

export default function Urls () {

    const { urls, isLoadingUrls } = useUrls();

    return <Page>
        <Page.PageSection sectionTitle="Your Urls">
            {isLoadingUrls && <LoadingIndicatorTexted loadingText="Loading Urls..." size="large"/>}
            <UrlsTable urls={urls}/>
        </Page.PageSection>
    </Page>
}