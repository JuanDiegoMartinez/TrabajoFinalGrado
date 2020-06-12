import React from "react";
import {Link} from "react-router-dom";
// @ts-ignore
import classNames from 'classnames';

interface MenuItemProps {
    route: string,
    active: boolean,
    title: string,
    icon: any,
    className: string
}

type Props = MenuItemProps;

export default class MenuItem extends React.Component<Props> {

    private renderLink() {
        return(
            <Link className="link" to={this.props.route}>
                <div className="zelda">
                    <div className="divIcono">{this.props.icon}</div>
                    <div className="nombre">{this.props.title}</div>
                </div>
            </Link>
        );
    }

    render() : React.ReactNode {

        const classComponent = classNames({active: this.props.active});
        return (
            <li className={classComponent}>
                {this.renderLink()}
            </li>
        );
    }
}