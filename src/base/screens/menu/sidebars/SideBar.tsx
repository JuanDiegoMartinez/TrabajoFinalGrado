import React from "react";
import {Nav} from "react-bootstrap";
import {ROUTE_HOME} from "../../../../routing/routes";
import {matchPath, RouteComponentProps, withRouter} from "react-router-dom";
import MenuItem from "./MenuItem";
//import home from "../../../../res/img/home.png";
//import newUser from "../../../../res/img/newUser.png";

type Props = RouteComponentProps;

class SideBar extends React.Component<Props> {

    private isActive(routes: string[], exact: boolean = false): boolean {
        const {pathname} = this.props.location;
        let active = false;
        routes.forEach((route: string) => {
            const match = matchPath(pathname, route);
            if (match) {
                active = exact ?
                    match.url === pathname :
                    match.url === match.path
            }
        });
        return active;
    }

    render() : React.ReactNode {

        return (
            <Nav className="sidebar">

                <div className="menuDiv">
                    Menu
                </div>

                <MenuItem className="menuItem"
                    active={this.isActive([ROUTE_HOME], true)}
                    route={ROUTE_HOME}
                    title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"User List"}
                    //image={home}
                />
            </Nav>
        );
    }
}

export default withRouter(SideBar);