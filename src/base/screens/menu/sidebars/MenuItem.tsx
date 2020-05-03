import React from "react";
import {Link} from "react-router-dom";
// @ts-ignore
import classNames from 'classnames';

interface MenuItemProps {
    route: string,
    active: boolean,
    title: string,
    image?: string,
    className: string
}

type Props = MenuItemProps;

export default class MenuItem extends React.Component<Props> {

    private renderLink() {
        return(
            <Link className="link"  to={this.props.route}>
                <div>
                    <img src={this.props.image} alt="Inicio"/>
                    {this.props.title}
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