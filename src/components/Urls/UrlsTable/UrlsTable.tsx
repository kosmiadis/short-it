import './UrlsTable.css';
import { Url } from "../../../types/Url"
import UrlTableItem from '../UrlTableItem/UrlTableItem';

export default function UrlsTable ({ urls }: {urls: Url[]}) {
    return <>
        <table>
            <thead>
                <tr>
                    <th>Short Link</th>
                    <th>Original Link</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {urls.length === 0 && <tr id='no_urls_fallback'><td colSpan={5}><span>Looks like you don't have any urls yet!</span></td></tr>}
                {urls.length > 0 && urls.map(url => (
                    <UrlTableItem key={url._id} url={url}/>
                ))}
            </tbody>
        </table>
        {/* <div className="pagination">
                <button disabled={currentPage === 1} onClick={handlePrev}>Prev</button>
                <p>Page {currentPage} of {totalPages}</p>
                <button disabled={currentPage === totalPages} onClick={handleNext}>Next</button>
        </div> */}
    </>
}