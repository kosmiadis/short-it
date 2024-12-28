import Page from "../../components/ui/Page/Page";
import UrlsTable from "../../components/Urls/UrlsTable/UrlsTable";
import { Url } from "../../types/Url";

export default function Urls () {

    const urls: Url[] = [
        {
            _id: 'asdf09239002adslkf',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf09239002adslks',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'inactive',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf09239002adsls',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'inactive',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf09239002ads',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'inactive',
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
        },
        {
            _id: 'asdf0923δ92adslkf',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdsf0923δ92adslkf',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf0923δ92adslksf',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf0923δ92adslkasdfasdff',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf0923δ92adslkasdfklalaf',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
        {
            _id: 'asdf0923δ92adslkasdfklalασδφaf',
            original_url: 'https://google.com', 
            shortened_url: 'https://short-it/ks92s',
            created_by: '69asdlfka9223892asldsfk@',
            status: 'active',
            created_at: '23/12/2024'
        },
    ]

    return <Page>
        <Page.PageSection sectionTitle="Your Urls">
            <UrlsTable urls={urls}/>
        </Page.PageSection>
    </Page>
}