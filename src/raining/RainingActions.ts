import { RainingActionTypes, IRainingCheckboxClickAction } from "./RainingTypes";
import { ActionCreator } from "redux";

export const toggleRain: ActionCreator<IRainingCheckboxClickAction> = () => {
	console.log("RainingActions:toggleRain");
	return {
		type: RainingActionTypes.TOGGLERAIN
	};
};
