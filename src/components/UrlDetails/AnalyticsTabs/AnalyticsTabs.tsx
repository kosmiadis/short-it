import { useState } from "react";
import Tabs from "./Tabs/Tabs";
import TabContent from "./TabContent/TabContent";
import ChartData from "../../../types/ChartData";
import ClicksChart from "./ClicksChart/ClicksChart";
import DevicesChart from "./DevicesChart/DevicesChart";
import CountriesChart from "./CountriesChart/CountriesChart";

export type Analytic = 'clicks' | 'devices' | 'countries';

export default function AnalyticsTabs () {

    const [currentAnalytic, setCurrentAnalytic] = useState<Analytic>('clicks')
    let tabContent;

    const dummyClicksTemporaryData: ChartData[] = [
        {
            name: 'January',
            x: 1,
            y: 29
        },
        {
            name: 'Februray',
            x: 2,
            y: 42
        },
        {
            name: 'March',
            x: 2,
            y: 2
        },
        {
            name: 'April',
            x: 2,
            y: 4
        },
        {
            name: 'May',
            x: 2,
            y: 55
        },
        {
            name: 'June',
            x: 2,
            y: 122
        },
        {
            name: 'July',
            x: 2,
            y: 156
        },
        {
            name: 'August',
            x: 2,
            y: 222
        },
        {
            name: 'September',
            x: 2,
            y: 67
        },
        {
            name: 'October',
            x: 2,
            y: 56
        },
        {
            name: 'November',
            x: 2,
            y: 45
        },
        {
            name: 'December',
            x: 2,
            y: 42
        },
    ]

    const dummyDevicesTemporaryData: ChartData[] = [
        {
            name: 'Desktop',
            x: 1,
            y: 243
        },
        {
            name: 'Mobile',
            x: 2,
            y: 110
        },
        {
            name: 'TV',
            x: 3,
            y: 2
        },
    ]

    const dummyCountriesTemporaryData: ChartData[] = [
        {
            name: 'Greece',
            x: 1,
            y: 1234
        },
        {
            name: 'UK',
            x: 2,
            y: 188
        },
        {
            name: 'USA',
            x: 1,
            y: 159
        },
    ]

    if (currentAnalytic === 'clicks') {
        tabContent = <ClicksChart data={dummyClicksTemporaryData} />
    }

    if (currentAnalytic === 'devices') { 
        tabContent = <DevicesChart data={dummyDevicesTemporaryData} />
    }

    if (currentAnalytic === 'countries') { 
        tabContent = <CountriesChart data={dummyCountriesTemporaryData} />
    }

    function toggleTab (identifier: Analytic) {
        setCurrentAnalytic(identifier);
    }

    return <div className="tabs_analytics">
        <Tabs currentAnalytic={currentAnalytic} toggleTab={toggleTab} />
        <TabContent>
            {tabContent}
        </TabContent>
    </div>
}