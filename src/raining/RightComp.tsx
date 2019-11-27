import * as React from "react";

import { connect } from "react-redux";
import { IApplicationState } from "../Store";

interface IProps {
	isItRaining: boolean;
}

const RightComp: React.SFC<IProps> = (props: IProps) => {
	console.log("RightComp:rendering", props.isItRaining );
	return (
		<div className="comp-container RightComp">
			RightComp
			<div className="comp-container-A">
				<div className="comp-container-B">
					<h1>{props.isItRaining ? "Its raining. Better bring an umbrella, then." : "Its not raining!"}</h1>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (store: IApplicationState) => {
	console.log("RightComp:mapStateToProps", store.rain.rainState);
	return {
		isItRaining: store.rain.rainState
	};
};

const connected = connect( mapStateToProps );
export default connected(RightComp);
