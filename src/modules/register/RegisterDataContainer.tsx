import React from 'react';
import RegisterView from "./RegisterView";
import {User} from "../../models/data/User";
import {newUser} from "./actions/RegisterActions";
import {connect} from "react-redux";

interface ReduxState {
    cuenta2: any
}

interface ActionProps {
    newUser: (formValues: User) => any
}

type Props = ActionProps & ReduxState;

class RegisterDataContainer extends React.Component<Props, {}> {

    onRegisterSubmit = (values: User) : void => {
        //Insertar en bbdd e ir a login
        this.props.newUser(values);
    }

    render(): React.ReactNode {

        return (
            <div>
            <RegisterView onFormSubmit={this.onRegisterSubmit}/>
            {this.props.cuenta2}
            </div>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        cuenta2: state.RegisterReducer.cuenta
    }
}

export default connect(mapStateToProps, {newUser})(RegisterDataContainer);