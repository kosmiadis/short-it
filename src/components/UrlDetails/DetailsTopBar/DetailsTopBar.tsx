import { Url } from "../../../types/Url"
import Button from "../../ui/Button/Button"
import './DetailsTopBar.css';
import linkImg from '../../../assets/link.png';

type DetailsTopBarProps = {
    url: Url
}

export default function DetailsTopBar ({
    url
}: DetailsTopBarProps) {
    return <div className="details_top_bar">
    <div className="quick_info">
        <a target="_blank" href={url.shortened_url}>{url.shortened_url.split('//')[1]}<img className="time_icon" src={linkImg}/></a>
        <span id={url.status}>{url.status.slice(0,1).toUpperCase() + url.status.slice(1)}</span>
    </div>
    <div className="url_actions">
        <Button btnType="action-btn">{url.status === 'active' ? 'Inactivate' : 'Activate'}</Button>
        <Button btnType="danger-btn">Delete</Button>
    </div>
    </div>
}