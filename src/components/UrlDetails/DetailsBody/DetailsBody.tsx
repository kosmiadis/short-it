import { Url } from '../../../types/Url';
import './DetailsBody.css';
import clockImg from '../../../assets/time.png';
import linkImg from '../../../assets/link.png';

export default function DetailsBody ({ url } : {url: Url}) {
    return <div className="details_body">
        <div className="additional_info">
            <p><img className='time_icon' src={clockImg}/><span className='url_creation_date'>{url.created_at}</span></p>
            <p className='original_redirect'>Redirects to <a className="original_link" target='_blank' href={url.original_url}>{url.original_url.split('//')[1]}</a><img className='time_icon' src={linkImg} /></p>
        </div>
    </div>
}