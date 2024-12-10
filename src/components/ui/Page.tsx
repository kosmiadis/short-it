import { ReactNode } from "react";

const Page: React.FC<{pageTitle?: string, children: ReactNode}> = ({
    pageTitle,
    children
}) => {
    return <section className="full-w flex flex-col">
        <h2 className="text-xl jost-text">{pageTitle || ''}</h2>
        {children}
    </section>
}

export default Page;