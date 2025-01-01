import { useParams } from "react-router-dom";
import Page from "../../components/ui/Page/Page";
import UrlDetails from "../../components/UrlDetails/UrlDetails";
import LoadingIndicatorTexted from "../../components/ui/LoadingIndicatorTexted/LoadingIndicatorTexted";
import './UrlDetailsPage.css';
import { Url } from "../../types/Url";
import AnalyticsTabs from "../../components/UrlDetails/AnalyticsTabs/AnalyticsTabs";

export default function UrlDetailsPage () {
    const params = useParams();
    const isPending = false;

    const url: Url = {
        _id: 'asdf09239002adslkf',
        original_url: 'https://google.com', 
        shortened_url: 'https://short-it/ks92s',
        created_by: '69asdlfka9223892asldsfk@',
        status: 'inactive',
        created_at: '23/12/2024'
    }

    // useEffect(() => {
    //     // mutate() send a request to get info about url
        //extract the url id from the params
    // })

    return <Page>
        {isPending && <LoadingIndicatorTexted size="large" loadingText="Loading Url..."/>}
        {!isPending && <><Page.PageSection sectionTitle="UrlDetails">
            <UrlDetails url={url} />
        </Page.PageSection>

        <Page.PageSection sectionTitle="Analytics">
            <AnalyticsTabs />
        </Page.PageSection>
        </>}
    </Page>
}
