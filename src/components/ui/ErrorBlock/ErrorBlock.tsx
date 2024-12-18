import './ErrorBlock.css';

const ErrorBlock: React.FC<{text: string}> = ({ text }) => {
    return <div className="error_block">
        <p className="error_text">{text}</p>
    </div>
}

export default ErrorBlock;