import { ReactNode } from "react";

type Direction = 'row' | 'col'

const Group: React.FC<{direction: Direction, className: string, children: ReactNode}> = ({ direction, className, children}) => {
    const directionClass = 'flex-'+ direction;
    
    return <div className={"flex flex-gap " + directionClass + ' ' + className }>
        {children}
    </div>
}

export default Group;