import { createPortal } from "react-dom"
import './AlertBox.css';
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Button from "../Button/Button";
import { useRef } from "react";

type AlertBoxProps = {
    title: string,
    text: string,
    type: 'pending' | 'error' | 'success'
}

export default function AlertBox ({ title, type }: AlertBoxProps ) {
    const portalTarget = useRef(document.getElementById('alert_box')!);

    const handleRemoveFromDom = () => {
        document.getElementById('core-layout')!.removeChild(portalTarget.current!)
    }


    return createPortal(<div className={"alert_box " + type}>
        {
            type === 'pending' && <>
            <LoadingIndicator size="small"/>
            <span>Logging Out...</span>
            </>
        }
        {
            type === 'error' && <>
                <h3>{title}</h3>
                <Button onClick={handleRemoveFromDom} btnType="danger-btn">X</Button>
            </>
            
        }
    </div>, portalTarget.current);
}