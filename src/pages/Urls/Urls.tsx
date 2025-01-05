import { useEffect } from "react";
import LoadingIndicatorTexted from "../../components/ui/LoadingIndicatorTexted/LoadingIndicatorTexted";
import Page from "../../components/ui/Page/Page";
import UrlsTable from "../../components/Urls/UrlsTable/UrlsTable";
import { useUrls } from "../../store/UrlsLoaderProvided";

export default function Urls () {

    const { urls, isLoadingUrls, refetchUrls } = useUrls();

    //to keep it synchronized if any change was made to a url's status.
    useEffect(() => {
        refetchUrls()
    }, [])

    return <Page>
        <Page.PageSection sectionTitle="Your Urls">
            {isLoadingUrls && <LoadingIndicatorTexted loadingText="Loading Urls..." size="large"/>}
            <UrlsTable urls={urls}/>
        </Page.PageSection>
    </Page>
}