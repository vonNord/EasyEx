import { applyMiddleware, combineReducers, createStore, Store, AnyAction } from "redux";
import thunk from "redux-thunk";

import { rainingReducer } from "./raining/RainingReducer";
import { IRainingState } from "./raining/RainingTypes";

export interface IApplicationState {
    rain: IRainingState;
}

const rootReducer = combineReducers<IApplicationState>({
    rain: rainingReducer
});

export default function configureStore(): Store<IApplicationState> {
    console.log("Store:configureStore");
    const store: Store< IApplicationState, AnyAction> = createStore( rootReducer, undefined, applyMiddleware( thunk ) );
    return store;
}
