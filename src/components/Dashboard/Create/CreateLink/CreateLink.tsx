import Button from '../../../ui/Button/Button';
import InputArea from '../../../ui/InputArea/InputArea';
import './CreateLink.css';

export default function CreateLink () {

    const handleAddLink = () => {
        //send request (mutate)
    }
    
    return <div className='create_new_link'>
        <p>Create a new "Short-It" link!</p>
        <div className='new_link'>
            <InputArea placeholder='Enter url to short' id='new_link'/>
            <Button onClick={handleAddLink} btnType='action-btn'>Short</Button>
        </div>
    </div>
}