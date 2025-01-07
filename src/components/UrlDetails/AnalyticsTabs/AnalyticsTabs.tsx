import { useState } from "react";
import Tabs from "./Tabs/Tabs";
import TabContent from "./TabContent/TabContent";
import ClicksChart from "./ClicksChart/ClicksChart";
import { AnalyticsResponse } from "../../../types/AnalyticsResponse";
import { useQuery } from "@tanstack/react-query";
import LoadingSection from "../../ui/LoadingSection/LoadingSection";
import LoadingIndicatorTexted from "../../ui/LoadingIndicatorTexted/LoadingIndicatorTexted";
import AnalyticsBarChart from "./AnalyticsBarChart/AnalyticsBarChart";
import './AnalyticsTabs.css';

export type Analytic = 'clicks' | 'devices' | 'countries';

export default function AnalyticsTabs ({url_id}: {url_id: string}) {

    const [currentAnalytic, setCurrentAnalytic] = useState<Analytic>('clicks')
    let tabContent;

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['analytics'],
        queryFn: () => loadAnalytics({ url_id })
    })
    
    //check if there are any analytics to show.
    const noData = data?.clicks?.filter((click) => click?.clicks > 0).length === 0;
    console.log(noData);
    if (!isPending && noData) {
        tabContent = <p className="no_analytics">No Analytics to show!</p>
    }

    if (!noData && data && currentAnalytic === 'clicks') {
        tabContent = <ClicksChart data={data.clicks || []} />
    }

    if (!noData && data && currentAnalytic === 'devices') { 
        tabContent = <AnalyticsBarChart data={data.devices || []} />
    }

    if (!noData && data && currentAnalytic === 'countries') { 
        tabContent = <AnalyticsBarChart data={data.countries || []} />
    }

    function toggleTab (identifier: Analytic) {
        setCurrentAnalytic(identifier);
    }

    return <div className="tabs_analytics">
        {isPending && <LoadingSection><LoadingIndicatorTexted size="medium" loadingText="Loading Analytics..."/></LoadingSection>}
        {isError && <p>{error.message}</p>}
        {!isPending && data && 
        <>
            <Tabs currentAnalytic={currentAnalytic} toggleTab={toggleTab} />
            <TabContent>
                {tabContent}
            </TabContent>
        </>
        }
    </div>
}

async function loadAnalytics ({url_id}: {url_id: string}): Promise<AnalyticsResponse> {
    try {
        const req = await fetch('http://localhost:3000/analytics/'+url_id , {
            method: "GET",
            credentials: 'include',
        });
        
        if (!req.ok) {
            throw await req.json();
        }
        return await req.json();
    }
    catch (e) {
        throw new Error('Analytics could not be loaded :(')
    }
    
}