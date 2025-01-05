import {  RefObject } from 'react';
import './InputArea.css';

type InitialValue = string | number | undefined;

const InputArea: React.FC<{inputRef?: RefObject<HTMLInputElement>, id: string, label?: string, type?: string, initialValue?: InitialValue, placeholder?: string, }> = ({
    inputRef,
    id, 
    label,
    type,
    initialValue,
    placeholder
}) => {
    return <div className='input_area required'> 
        {label && <label htmlFor={id}>{label}</label>}
        <input autoComplete='off' placeholder={placeholder} ref={inputRef} type={type || 'text'} id={id} value={initialValue} name={id}/>
    </div>
}

export default InputArea;