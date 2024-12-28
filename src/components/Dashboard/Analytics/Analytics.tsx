import deviceImg from '../../../assets/device.png';
import countryImg from '../../../assets/country.png';
import clicksImg from '../../../assets/clicks.png';
import './Analytics.css';


type AnalyticBoxProps = {
    title: string,
    value: number | string,
    imageSrc: string,
}

function AnalyticBox ({title, value, imageSrc }: AnalyticBoxProps) {
    return <div className="analytic_box">
        <img className='icon' src={imageSrc} />
        <div className='analytic'>
            <span className='analytic_title'>{title}</span>
            <span className='analytic_value'>{value}</span>
        </div>
    </div>
}

export default function Analytics () {

    const totalClicks = 29;
    const topDevice = 'Mobile';
    const topCountry = 'Greece';

    return <div className='general_analytics'>
        <AnalyticBox title='Total Clicks' value={totalClicks} imageSrc={clicksImg}/>
        <AnalyticBox title='Top Device' value={topDevice} imageSrc={deviceImg}/>
        <AnalyticBox title='Top Country' value={topCountry} imageSrc={countryImg}/>
    </div>
}