import { MutationFunction, useMutation } from '@tanstack/react-query';
import Button from '../../../ui/Button/Button';
import InputArea from '../../../ui/InputArea/InputArea';
import './CreateLink.css';
import { UrlCreationResponse } from '../../../../types/UrlCreationResponse';
import { useRef } from 'react';
import LoadingIndicatorTexted from '../../../ui/LoadingIndicatorTexted/LoadingIndicatorTexted';
import { useUrls } from '../../../../store/UrlsLoaderProvided';
import LoadingSection from '../../../ui/LoadingSection/LoadingSection';

export default function CreateLink () {

    const { refetchUrls } = useUrls();

    const { mutate, isPending, isError } = useMutation({
        mutationFn: createUrl,
        onSuccess: () => {
            refetchUrls();
        }
    })

    const urlInput = useRef<HTMLInputElement>(null);

    const handleAddLink = () => {
        const enteredUrl = urlInput.current!.value.trim();
        
        if (enteredUrl === '') {
            return 
        }
        mutate({ url: enteredUrl });
    }

    
    return <div className='create_new_link'>
        <p>Create a new "Short-It" link!</p>

        {isError && <p>Url was not created!</p>}
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
}