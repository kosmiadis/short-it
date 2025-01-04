import { useUrls } from "../../../store/UrlsLoaderProvided";
import LoadingIndicatorTexted from "../../ui/LoadingIndicatorTexted/LoadingIndicatorTexted";
import LoadingSection from "../../ui/LoadingSection/LoadingSection";
import LatestUrlItem from "../LatestUrlItem/LatestUrlItem";

import './LatestUrls.css';

export default function LatestUrls () {

    const { urls, isLoadingUrls } = useUrls();

    if (isLoadingUrls) {
        return <LoadingSection><LoadingIndicatorTexted size="medium" loadingText="Loading Latest Urls..."/></LoadingSection>
    }

    if (urls?.length === 0) {
        return <p id="urls_list_emtpy_message">It looks that you don't have any URL's!</p>
    }

    const sliceStart = urls.length <= 6 ? 0 : urls.length - 6 ;
    const sliceEnd = urls.length <= 6 ? 6 : urls.length;
    console.log(sliceStart);
    console.log(sliceEnd);

    return <>
        <ul>
            {urls?.slice(sliceStart, sliceEnd).map(link => (
                    <LatestUrlItem key={link._id} urlItem={link}/>
            ))}
        </ul>
    </>
}