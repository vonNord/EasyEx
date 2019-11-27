import * as React from "react";
import { toggleRain } from "./RainingActions";
import { connect } from "react-redux";
import { IApplicationState } from "../Store";

interface IProps {
	onCheckboxClick: typeof toggleRain;
}

const LeftComp: React.SFC<IProps> = (props: IProps) => {
	const handleCheckboxClick = () => {
		console.log("LeftComp:handleCheckboxClick");
		props.onCheckboxClick();
	};

	console.log("LeftComp:rendering" );
	return (
		<div className="comp-container LeftComp">
			LeftComp
			<div className="comp-container-A">
				<div className="comp-container-B">
					Is it raining?
					<input type="checkbox" onChange={handleCheckboxClick} />
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch: any) => {
	console.log("LeftComp:mapDispatchToProps");
	return {
		onCheckboxClick: () => dispatch(toggleRain())
	};
};

const mapStateToProps = (store: IApplicationState) => {
	console.log("LeftComp:mapStateToProps", store.rain.rainState );
	return {
	};
};

const connected = connect( mapStateToProps, mapDispatchToProps );
export default connected(LeftComp);
