import LoadingIndicator from "../LoadingIndicator/LoadingIndicator"
import './LoadingIndicatorTexted.css';

type LoadingIndicatorTextedProps = {
    size: 'small' | 'medium' | 'large',
    loadingText: string,
}

export default function LoadingIndicatorTexted ({size, loadingText}: LoadingIndicatorTextedProps) {
    return <div className="loading_indicator_texted">
        <LoadingIndicator size={size}/>
        <span className="loading_indicator_text">{loadingText}</span>
    </div>
}