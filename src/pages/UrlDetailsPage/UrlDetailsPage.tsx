import { useNavigate, useParams } from "react-router-dom";
import Page from "../../components/ui/Page/Page";
import UrlDetails from "../../components/UrlDetails/UrlDetails";
import LoadingIndicatorTexted from "../../components/ui/LoadingIndicatorTexted/LoadingIndicatorTexted";
import './UrlDetailsPage.css';
import AnalyticsTabs from "../../components/UrlDetails/AnalyticsTabs/AnalyticsTabs";
import { useQuery } from "@tanstack/react-query";
import { GetUrlResponse } from "../../types/GetUrlResponse";
import Button from "../../components/ui/Button/Button";

export default function UrlDetailsPage () {
    const params = useParams();
    const navigate = useNavigate();

    const { data, isPending, isError } = useQuery({
        queryKey: ['urls', params.urlId!],
        queryFn: () => loadUrl({url_id: params.urlId!}),
    })

    function handleDashboardNavigation () {
        navigate('/dashboard');
    }

    return <Page>
        {isPending && <LoadingIndicatorTexted size="large" loadingText="Loading Url..."/>}
        
        {isError && <Page.PageSection sectionTitle="An Error Occured!">
            <p>Something went wrong! Please try again later.</p>
            <Button onClick={handleDashboardNavigation} btnType="action-btn">Go to Dashboard</Button>
        </Page.PageSection>}
        
        {data?.url && <><Page.PageSection sectionTitle="UrlDetails">
            <UrlDetails url={data.url} />
        </Page.PageSection>

        <Page.PageSection sectionTitle="Analytics">
            <AnalyticsTabs url_id={params.urlId!}/>
        </Page.PageSection>
        </>}
    </Page>
}

async function loadUrl ({url_id}: {url_id: string}): Promise<GetUrlResponse> {
    const req = await fetch('http://localhost:3000/url/'+url_id , {
        method: "GET",
        credentials: 'include',
    });
    
    if (!req.ok) {
        throw await req.json();
    }
    return await req.json();
}

