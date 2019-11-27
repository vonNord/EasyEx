import { Reducer } from "redux";
import { RainingActions, RainingActionTypes, IRainingState } from "./RainingTypes";

const initialRainingState: IRainingState = {
    rainState: false
};

export const rainingReducer: Reducer< IRainingState, RainingActions> = (state = initialRainingState, action) => {
    console.log("Reducers called", action.type );
    switch( action.type ) {
        case RainingActionTypes.TOGGLERAIN: {
            console.log("rainingReducer", state);
            return {
                ...state,
                rainState: !state.rainState
            };
        }
    }
    return state || initialRainingState;
};
