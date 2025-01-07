import './LatestUrlItem.css';
import { useState } from "react";
import { Url } from "../../../types/Url"
import Button from "../../ui/Button/Button"
import timeImg from '../../../assets/time.png';
import { useNavigate } from "react-router-dom";
import { queryClient } from '../../../query/queryClient';

type UrlItemProps = {
    urlItem: Url
}

export default function LatestUrlItem ({ urlItem }: UrlItemProps) {

    const navigate = useNavigate();
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('http://localhost:3000/'+urlItem.shortened_url)
        .then(() => {
            setIsCopied(true)
        })
    }

    const handleView = () => {
        queryClient.clear();
        navigate(`/urls/${urlItem._id}`)
    }

    return <li>
            <div className="top">
                <div className="shortened_ulr_display">
                <a href={'http://localhost:3000/'+urlItem.shortened_url} target="_blank">
                <span className='shortened_url'>
                    short-it/{urlItem.shortened_url}
                </span></a>
                <span onClick={handleCopy} className={`copy_url ${isCopied ? 'copied' : undefined}`}>{isCopied ? 'Copied' : 'Copy'}</span>

                </div>
                <Button onClick={handleView} btnType="action-btn">View</Button>
            </div>
            
            <span className='original_url'>  
                {urlItem.original_url.split('//')[1]}
            </span>
            
            <br />
            
            <span className='created_at'>
                <img className="time_icon" src={timeImg} alt='time' />
                {urlItem.created_at.split(' ')[0]}
            </span>
            
    </li> 
}