import React from "react";
import Sidebar from "react-sidebar";
import ComponentSidebar from "../menu/sidebars/SideBar";
import NavBar from "./sidebars/NavBar";

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

                <Sidebar
                    sidebar={<ComponentSidebar />}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    docked={true}
                    shadow={true}
                    styles={{sidebar: {position: 'fixed', background: "rgba(36,119,186,0.85)", width: "250px", marginTop: "72px"} }}
                >
                </Sidebar>

                <main className="main">
                    {this.props.children}
                </main>

            </div>
        );
    }
}