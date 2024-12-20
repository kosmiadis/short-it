import './LoadingIndicator.css';

type Size = 'small' | 'medium' | 'large'

const LoadingIndicator: React.FC<{size: Size}> = ({ size }) => {
    return <div className={'loading_indicator ' + size}></div>
}

export default LoadingIndicator;