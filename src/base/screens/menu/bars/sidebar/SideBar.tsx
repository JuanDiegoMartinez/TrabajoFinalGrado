import React from "react";
import {Nav} from "react-bootstrap";
import {ROUTE_HOME, ROUTE_VIDEOGAMES} from "../../../../../routing/routes";
import {matchPath, RouteComponentProps, withRouter} from "react-router-dom";
import MenuItem from "./MenuItem";
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import HomeIcon from '@material-ui/icons/Home';

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

                <div><br/><br/></div>

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_HOME], true)}
                          route={ROUTE_HOME}
                          title={"Noticias"}
                          icon={<HomeIcon className="icono"/>}
                />

                <MenuItem className="menuItem"
                    active={this.isActive([ROUTE_VIDEOGAMES], true)}
                    route={ROUTE_VIDEOGAMES}
                    title={"Videojuegos"}
                    icon={<VideogameAssetIcon className="icono"/>}
                />

            </Nav>
        );
    }
}

export default withRouter(SideBar);