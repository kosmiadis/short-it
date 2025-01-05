import { Url } from '../../../types/Url';
import './DetailsBody.css';
import clockImg from '../../../assets/time.png';
import { useState } from 'react';

export default function DetailsBody ({ url } : {url: Url}) {

    const [isCopied, setIsCopied] = useState(false);

    function handleOnCopy () {
        navigator.clipboard.writeText('http://localhost:3000/'+url.shortened_url)
        .then(() => {
            setIsCopied(true)
        })
    }
    
    return <div className="details_body">
        <div className="additional_info">
            <p><img className='time_icon' src={clockImg}/><span className='url_creation_date'>{url.created_at}</span></p>
            <p className='original_redirect'><span className='redirect_title_span'>Redirects to</span> <a className="original_link" target='_blank' href={url.original_url}>{url.original_url} </a></p>
        </div>
        <span onClick={handleOnCopy} className={`copy_url_span ${isCopied === true ? 'copied' : undefined}`}>{isCopied ? 'Copied' : 'Copy Original Url'}</span>
    </div>
}