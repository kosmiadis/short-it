import { useAuth } from "../../../store/AuthProvider";
import { Url } from "../../../types/Url";
import LatestUrlItem from "../LatestUrlItem/LatestUrlItem";

import './LatestUrls.css';

export default function LatestUrls () {
    
    const { authUser } = useAuth();
    // const linksList = authUser?.user?.urls

    const linksList: Url[] = [
        {
            _id: 'asdf09239002adslkf',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'inactive',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf09239002adslks',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf09239002adsls',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf09239002ads',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdasdf39002adslkf',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf092392adslkf',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        }
    ]

    if (linksList?.length === 0) {
        return <p id="urls_list_emtpy_message">It looks that you don't have any URL's!</p>
    }

    return <>
        <ul>
            {linksList?.slice(0,6).map(link => (
                    <LatestUrlItem key={link._id} urlItem={link}/>
            ))}
        </ul>
    </>
}