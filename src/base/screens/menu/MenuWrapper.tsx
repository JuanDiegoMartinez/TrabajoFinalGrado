import React from "react";
import Sidebar from "react-sidebar";
import ComponentSidebar from "./bars/sidebar/SideBar";
import NavBar from "./bars/navbar/NavBar";

interface State {
    sidebarOpen: boolean
}

interface Props {}

export default class MenuWrapper extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open: boolean) {
        this.setState({ sidebarOpen: open });
    }

    render() : React.ReactNode {
        return (
            <div>

                <NavBar />

                <ComponentSidebar />

                <main className="main">
                    <div className="maindiv">
                        {this.props.children}
                    </div>
                </main>

            </div>
        );
    }
}