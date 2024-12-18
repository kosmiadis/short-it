import { ReactNode } from "react";
import './Page.css';

const PageSection: React.FC<{sectionTitle?: string, id?: string, className?: string, children?: ReactNode}> = ({sectionTitle, id, className, children}) => {
    return <section id={id} className={'page_section ' + className}>
        {sectionTitle && <h2 className="section-title jost-text">{sectionTitle}</h2>}
        {children}
    </section>
}

const Page: React.FC<{pageTitle?: string, id?: string, className?: string, children: ReactNode}> 
& { PageSection: typeof PageSection} = ({
    pageTitle,
    id,
    className,
    children
}) => {
    return <main id={id} className={'page ' + className}>
        {pageTitle && <h2 className="page_title">{pageTitle}</h2>}
        {children}
    </main>
}

Page.PageSection = PageSection;
export default Page;