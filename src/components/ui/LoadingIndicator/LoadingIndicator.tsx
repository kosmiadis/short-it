import './LoadingIndicator.css';

type Size = 'small' | 'medium' | 'large'

const LoadingIndicator: React.FC<{size: Size}> = ({ size }) => {
    return <div className={'loading_indicator ' + size}>
        <div className='line'></div>
        <div className='line'></div>
    </div>
}

export default LoadingIndicator;