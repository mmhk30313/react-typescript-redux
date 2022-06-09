import { Fragment, useEffect, useState } from "react";
import './layout.scss';
import DashNavigation from "./navigations/navigations";
interface LayoutProps {
    children?: React.ReactNode;
    pad?: boolean;
    btnRequest?: string;
    click?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, pad, btnRequest, click }) => {
    const [padding, setpadding] = useState(pad);
    useEffect(() => {
        setpadding(pad)

    }, [padding])
    return (
        <Fragment>
            <div className="layout-wrapper">
                <DashNavigation>
                    <div className="dashboard-layout">
                        {children}
                    </div>
                </DashNavigation>
            </div>

        </Fragment>
    )
}

export default Layout;