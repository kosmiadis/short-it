import { Url } from "../../../types/Url"
import Button from "../../ui/Button/Button"
import './DetailsTopBar.css';
import linkImg from '../../../assets/link.png';
import { MutateFunction, useMutation } from "@tanstack/react-query";
import { ToggleStatusResponse } from "../../../types/ToggleStatusResponse";
import LoadingIndicatorTexted from "../../ui/LoadingIndicatorTexted/LoadingIndicatorTexted";
import { queryClient } from "../../../query/queryClient";
import LoadingSection from "../../ui/LoadingSection/LoadingSection";
import { DeleteUrlResponse } from "../../../types/DeleteUrlResponse";
import { useNavigate } from "react-router-dom";

type DetailsTopBarProps = {
    url: Url
}

export default function DetailsTopBar ({ url }: DetailsTopBarProps) {

    const navigate = useNavigate();

    const { mutate: toggleStatusMutate, isPending: isToggleStatusPending, isError: isToggleStatusError, error: toggleStatusError  } = useMutation({
        mutationFn: toggleStatus,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['urls', url._id]})
        }
    });

    const { mutate: deleteUrlMutate, isPending: deleteUrlIsPending, isError: isDeleteError, error: deleteError } = useMutation({
        mutationFn: deleteUrl,
        onSuccess: () => {
            navigate('/dashboard');
            queryClient.invalidateQueries({ queryKey: ['urls']})
        }
    });

    function handleToggleStatus () {
        toggleStatusMutate({ status: url.status, url_id: url._id })
    }

    function handleDelete () {
        deleteUrlMutate({ url_id: url._id })
    }

    return <div className="details_top_bar">
        {isToggleStatusPending && <LoadingSection><LoadingIndicatorTexted size="large" loadingText={
            url.status === 'active' ? 'Deactivating Url...' : 'Activating Url...'
        }/></LoadingSection>}

        {deleteUrlIsPending && <LoadingSection><LoadingIndicatorTexted size="large" loadingText={'Deleting Url...'}/></LoadingSection>}

        {isToggleStatusError || isDeleteError && <p>{toggleStatusError?.message || deleteError?.message}</p>}

        {!isToggleStatusPending && !deleteUrlIsPending && <>
        <div className="quick_info">
            <a target="_blank" href={'http://localhost:3000/'+url.shortened_url}>short-it/{url.shortened_url}<img className="time_icon" src={linkImg}/></a>
            <span id={url.status}>{url.status.slice(0,1).toUpperCase() + url.status.slice(1)}</span>
        </div>
        <div className="url_actions">
            <Button disabled={isToggleStatusPending} onClick={handleToggleStatus} btnType="action-btn">{url.status === 'active' ? 'Deactivate' : 'Activate'}</Button>
            <Button onClick={handleDelete} disabled={deleteUrlIsPending} btnType="danger-btn">Delete</Button>
        </div>
        </>}
    </div>
}

async function toggleStatus ({ status, url_id }: { status: 'active' | 'inactive', url_id: string }): Promise<MutateFunction<ToggleStatusResponse>> {
    const action = status === 'active' ? 'deactivate' : 'activate'
    try {
        const req = await fetch('http://localhost:3000/url/'+action+'/'+url_id , {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!req.ok) {
            throw await req.json();
        }
        return await req.json();
    } catch (e) {
        throw new Error(`Url ${status === 'active' ? 'deactivation failed' : 'activation failed'}, due to server problems! Try again later.`)
    }
    
}

async function deleteUrl ({ url_id }: { url_id: string }): Promise<MutateFunction<DeleteUrlResponse>> {
    try {
        const req = await fetch('http://localhost:3000/url/delete/'+url_id , {
            method: "DELETE",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!req.ok) {
            throw await req.json();
        }
        return await req.json();
    } catch (e) {
        throw new Error('Url deletion failed, due to server problems! Try again later.')
    }
}
