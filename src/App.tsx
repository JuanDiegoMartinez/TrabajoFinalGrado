import React from 'react';
import {createBrowserHistory, History} from 'history';
import {routerMiddleware} from "react-router-redux";
import {applyMiddleware, createStore, compose, Store} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import combinedReducer from './redux/CombinedReducers';
import Routing from "./routing/Routing";
import './res/css/style.scss';
import history from "./history";

interface Props {}
interface State {}

class App extends React.Component<Props, State> {

    //history: Mantiene un registro de la barra de direcciones.
    protected history: History;
    //store: Almacena lo relacionado con redux.
    protected store: Store;

    //Con typescript se necesita pasarle por lo menos los props
    constructor(props: Props, state: State) {
        super(props, state);
        this.history = createBrowserHistory();
        //Necesitamos que react-router use redux, pasandole la history, de esta manera puedes acceder al enrutado
        const middleware = routerMiddleware(this.history);
        //composeEnhancers: adquiere el valor de compose que es una función y sirve para combinar funciones
        const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        //applyMiddleware: devuelve (Función) Un potenciador de store que aplican los middlewares
        this.store = createStore(combinedReducer, composeEnhancers(applyMiddleware(middleware, thunk)));
    }

    render() : React.ReactNode {
        return (
            //Como redux no está hecho para funcionar con react necesitamos hacer un wrapper
            //Este wrapper envuelve todos los componentes react para que estos puedan acceder a la store
            <Provider store={this.store}>
                <Routing history={history} />
            </Provider>
        );
    }
}

export default App;
