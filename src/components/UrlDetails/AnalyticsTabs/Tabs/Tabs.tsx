import { Analytic } from "../AnalyticsTabs";
import TabButton from "../TabButton/TabButton";

type TabsProps = {
    currentAnalytic: Analytic,
    toggleTab: (identifier: Analytic) => void
}

export default function Tabs ({ currentAnalytic,toggleTab }: TabsProps ) {
    return <div className='tabs_control'>
        <TabButton 
            onClick={() => toggleTab('clicks')} label="Clicks" 
            className={currentAnalytic === 'clicks' ? 'active' : undefined}
        />
        <TabButton 
            onClick={() => toggleTab('devices')} label="Devices" 
            className={currentAnalytic === 'devices' ? 'active' : undefined}
        />
        <TabButton 
            onClick={() => toggleTab('countries')} label="Countries" 
            className={currentAnalytic === 'countries' ? 'active' : undefined}
        />
    </div>
}