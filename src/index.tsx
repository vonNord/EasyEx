import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { Store, AnyAction } from "redux";
import configureStore, { IApplicationState } from "./Store";
import { Provider } from "react-redux";

interface IProps {
    store: Store<IApplicationState>;
}
const Root: React.SFC< IProps > = props => {
    console.log("Root:rendering");
    return (
        <Provider store={props.store}>
            <App />
        </Provider>);
};

console.log( "index:configure store");
const store: Store< IApplicationState, AnyAction> = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// if you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
