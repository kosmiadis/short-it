import { MutationFunction, useMutation } from '@tanstack/react-query';
import Button from '../../../ui/Button/Button';
import InputArea from '../../../ui/InputArea/InputArea';
import './CreateLink.css';
import { UrlCreationResponse } from '../../../../types/UrlCreationResponse';
import { useRef, useState } from 'react';
import LoadingIndicatorTexted from '../../../ui/LoadingIndicatorTexted/LoadingIndicatorTexted';
import { useUrls } from '../../../../store/UrlsLoaderProvided';
import LoadingSection from '../../../ui/LoadingSection/LoadingSection';

export default function CreateLink () {

    const { refetchUrls } = useUrls();
    let wrongFormatMessgae = 'Urls must include "http://" or "https://" at the start! They also cannot be empty!';
    const [urlHasWrongFormat, setUrlHasWrongFormat] = useState(false);

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: createUrl,
        onSuccess: () => {
            refetchUrls();
        }
    })

    const urlInput = useRef<HTMLInputElement>(null);

    const handleAddLink = () => {
        const enteredUrl = urlInput.current!.value.trim();
        setUrlHasWrongFormat(false);
        
        if (enteredUrl === '') {
            setUrlHasWrongFormat(true)
            return
        }
        if (!enteredUrl.includes('http://') && !enteredUrl.includes('https://')) {
            setUrlHasWrongFormat(true)
            return
        }
        mutate({ url: enteredUrl });
    }

    
    return <div className='create_new_link'>
        <p>Create a new "Short-It" link!</p>

        {urlHasWrongFormat && <p>{wrongFormatMessgae}</p>}
        {isError && <p>{error.message}</p>}
        {isPending && <LoadingSection><LoadingIndicatorTexted loadingText='Creating Url' size='small'/></LoadingSection>}
        {!isPending && <>
            <div className='new_link'>
                <InputArea inputRef={urlInput} placeholder='Enter url to short' id='new_link'/>
                <Button onClick={handleAddLink} btnType='action-btn'>Short</Button>
            </div>
        </>}
    </div>
}

const createUrl: MutationFunction<UrlCreationResponse, {url: string}> = async ({url})  => {
    try {
        const req = await fetch('http://localhost:3000/create-url', {
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ entered_url: url }),
        });
        if (!req.ok) {
            throw await req.json();
        }
        return await req.json();
    }catch (e) {
        if (e.message === 'free quota used') {
            throw new Error('Max Url Creation Quota reached! Update to a paid plan to continue creating Urls!')
        }
        throw new Error('Something went wrong. Url was not created!')
    }
    
}