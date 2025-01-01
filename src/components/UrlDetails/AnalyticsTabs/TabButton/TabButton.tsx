import './TabButton.css';

type TabButtonProps = {
    label: string,
    className?: string,
    onClick: () => void
}

export default function TabButton ({ label, className, onClick }: TabButtonProps) {
    return <button onClick={onClick} className={className + " tab_btn"}>
        { label }
    </button>
}