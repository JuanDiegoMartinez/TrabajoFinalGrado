import React, {Dispatch} from 'react';
import RegisterView from "./RegisterView";
import {User} from "../../models/User";
import {newUser} from "./actions/RegisterActions";
import {connect} from "react-redux";

interface ReduxState {
    cuenta2: any
}

interface IProps {
    newUser: (formValues: User) => any
}

type Props = IProps & ReduxState;

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