import React from "react";
import Sidebar from "react-sidebar";
import ComponentSidebar from "./bars/sidebar/SideBar";
import NavBar from "./bars/navbar/NavBar";

interface State {
    sidebarOpen: boolean
}

interface Props {}

export default class MenuWrapper extends React.Component<Props, State> {

    render() : React.ReactNode {
        return (
            <div>

                <NavBar/>

                <Sidebar
                    sidebar={<ComponentSidebar />}
                    transitions={false}
                    docked={true}
                    shadow={true}
                    styles={{sidebar: {position: 'fixed', background: "rgba(36,119,186,0.85)", width: "250px", marginTop: "72px"} }}
                    sidebarClassName="sidebar"
                >
                </Sidebar>

                <main className="main">
                    <div className="maindiv">
                        {this.props.children}
                    </div>
                </main>

            </div>
        );
    }
}