import { Url } from "../../types/Url"
import DetailsTopBar from "./DetailsTopBar/DetailsTopBar"
import DetailsBody from "./DetailsBody/DetailsBody"

type UrlDetailsProps = {
    url: Url
}

export default function UrlDetails ({ url }: UrlDetailsProps) {
    return <div className="url_details">
        <DetailsTopBar url={url}/>
        <DetailsBody url={url}/>
    </div>
}

