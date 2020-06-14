import React from "react";
import {Nav} from "react-bootstrap";
import {
    ROUTE_EDITOR,
    ROUTE_EDITORES,
    ROUTE_GENERO,
    ROUTE_GENEROS,
    ROUTE_HOME,
    ROUTE_JUEGOS_FAVORITOS,
    ROUTE_NEW,
    ROUTE_VIDEOGAME,
    ROUTE_VIDEOGAMES,
    ROUTE_WEBS,
    ROUTE_WEBS_FAVORITAS
} from "../../../../../routing/routes";
import {matchPath, RouteComponentProps, withRouter} from "react-router-dom";
import MenuItem from "./MenuItem";
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookIcon from '@material-ui/icons/Book';
import StoreIcon from '@material-ui/icons/Store';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

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
                          active={this.isActive([ROUTE_HOME, ROUTE_NEW], true)}
                          route={ROUTE_HOME}
                          title={"Noticias"}
                          icon={<HomeIcon className="icono"/>}
                />

                <MenuItem className="menuItem"
                    active={this.isActive([ROUTE_VIDEOGAMES, ROUTE_VIDEOGAME], true)}
                    route={ROUTE_VIDEOGAMES}
                    title={"Videojuegos"}
                    icon={<VideogameAssetIcon className="icono"/>}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_WEBS], true)}
                          route={ROUTE_WEBS}
                          title={"Webs"}
                          icon={<LanguageIcon className="icono"/>}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_JUEGOS_FAVORITOS], true)}
                          route={ROUTE_JUEGOS_FAVORITOS}
                          title={"Juegos Favoritos"}
                          icon={<FavoriteIcon className="icono"/>}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_WEBS_FAVORITAS], true)}
                          route={ROUTE_WEBS_FAVORITAS}
                          title={"Webs Favoritas"}
                          icon={<BookIcon className="icono"/>}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_GENEROS, ROUTE_GENERO], true)}
                          route={ROUTE_GENEROS}
                          title={"Generos"}
                          icon={<LocalOfferIcon className="icono"/>}
                />

                <MenuItem className="menuItem"
                          active={this.isActive([ROUTE_EDITORES, ROUTE_EDITOR], true)}
                          route={ROUTE_EDITORES}
                          title={"Editores"}
                          icon={<LibraryBooksIcon className="icono"/>}
                />

            </Nav>
        );
    }
}

export default withRouter(SideBar);