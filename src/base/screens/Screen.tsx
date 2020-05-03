import * as React from "react";

export default abstract class Screen<P = {}, S = {}> extends React.Component<P, S> {

    public abstract renderScreen(): React.ReactNode;

    public render(): React.ReactNode {
        return this.renderScreen();
    }

}
