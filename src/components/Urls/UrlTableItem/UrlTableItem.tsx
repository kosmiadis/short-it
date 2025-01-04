import { useNavigate } from "react-router-dom";
import { Url } from "../../../types/Url"

type UrlDisplayItemProps = {
    url: Url
}

export default function UrlTableItem ({url}: UrlDisplayItemProps) {
    
    const navigate = useNavigate();


    const handleView = () => {
        navigate(`/urls/${url._id}`)
    }
    
    return <tr key={url._id}>
        <td><a target="group" href={'http://localhost:3000/'+url.shortened_url}>short-it/{url.shortened_url}</a><img /></td>
        <td><a target="group" href={url.original_url}>{url.original_url}</a></td>
        <td className={url.status}>{url.status.slice(0,1).toUpperCase() + url.status.slice(1)}</td>
        <td>{url.created_at}</td>
        <td className="url_action">
            <button onClick={handleView} className="action_btn">View</button>
        </td>
    </tr>
}