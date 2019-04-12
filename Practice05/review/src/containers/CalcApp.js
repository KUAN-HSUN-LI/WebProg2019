import React from "react";

import CalcButton from "../components/CalcButton";
import ZeroButton from "../components/ZeroButton";

// calculator App
class CalcApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			res: 0,
			opr: "",
			show: "0",
			isFloat: false,
			newInput: true,
		};
	}

	inputNum = e => {
		let num = parseInt(e.target.innerHTML);
		let show;
		if (this.state.show === "0") {
			this.setState(state => ({
				res: state.res,
				opr: state.opr,
				show: num.toString(),
				isFloat: state.isFloat,
				newInput: false,
			}));
			show = num.toString();
		} else if (this.state.opr !== "" && this.state.newInput) {
			this.setState(state => ({
				res: state.res,
				opr: state.opr,
				show: num.toString(),
				isFloat: state.isFloat,
				newInput: false,
			}));
		} else if (this.state.opr === "" && this.state.newInput) {
			this.setState(state => ({
				res: 0,
				opr: state.opr,
				show: num.toString(),
				isFloat: false,
				newInput: false,
			}));
		} else {
			this.setState(state => ({
				res: state.res,
				opr: state.opr,
				show: state.show.concat(num.toString()),
				isFloat: state.isFloat,
				newInput: false,
			}));
		}
	};

	inputOpr = e => {
		let opr = e.target.innerHTML;
		if (opr === "." && this.state.isFloat === false) {
			this.setState(state => ({
				show: state.show.concat(opr),
				isFloat: true,
			}));
		} else if (!this.state.newInput && opr === "=" && this.state.opr !== "") {
			this.setState(state => ({
				res: eval(`${state.res} ${state.opr} ${state.show}`),
				opr: "",
				show: eval(`${state.res} ${state.opr} ${state.show}`).toString(),
				isFloat: false,
				newInput: true,
			}));
		} else if (!this.state.newInput && (opr === "+" || opr === "-" || opr === "*" || opr === "/")) {
			if (this.state.opr === "") {
				this.setState(state => ({
					res: parseFloat(state.show),
					opr: opr,
					show: state.show,
					isFloat: false,
					newInput: true,
				}));
			} else {
				this.setState(state => ({
					res: eval(`${state.res} ${state.opr} ${state.show}`),
					opr: opr,
					show: eval(`${state.res} ${state.opr} ${state.show}`).toString(),
					isFloat: false,
					newInput: true,
				}));
			}
		} else if (this.state.newInput && (opr === "+" || opr === "-" || opr === "*" || opr === "/")) {
			this.setState(state => ({
				opr: opr,
			}));
		}
	};

	resetState = () => {
		this.setState(state => ({
			res: 0,
			opr: "",
			show: "0",
			isFloat: false,
			newInput: true,
		}));
	};

	showNotImplemented() {
		console.warn("This function is not implemented yet.");
	}

	render() {
		console.log(this.state);
		return (
			<div className="calc-app">
				<div className="calc-container">
					<div className="calc-output">
						<div className="calc-display">{this.state.show}</div>
					</div>
					<div className="calc-row">
						<CalcButton onClick={this.resetState}>AC</CalcButton>
						<CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
						<CalcButton onClick={this.showNotImplemented}>%</CalcButton>
						<CalcButton onClick={this.inputOpr} className="calc-operator">
							/
						</CalcButton>
					</div>
					<div className="calc-row">
						<CalcButton onClick={this.inputNum} className="calc-number">
							7
						</CalcButton>
						<CalcButton onClick={this.inputNum} className="calc-number">
							8
						</CalcButton>
						<CalcButton onClick={this.inputNum} className="calc-number">
							9
						</CalcButton>
						<CalcButton onClick={this.inputOpr} className="calc-operator">
							*
						</CalcButton>
					</div>
					<div className="calc-row">
						<CalcButton onClick={this.inputNum} className="calc-number">
							4
						</CalcButton>
						<CalcButton onClick={this.inputNum} className="calc-number">
							5
						</CalcButton>
						<CalcButton onClick={this.inputNum} className="calc-number">
							6
						</CalcButton>
						<CalcButton onClick={this.inputOpr} className="calc-operator">
							-
						</CalcButton>
					</div>
					<div className="calc-row">
						<CalcButton onClick={this.inputNum} className="calc-number">
							1
						</CalcButton>
						<CalcButton onClick={this.inputNum} className="calc-number">
							2
						</CalcButton>
						<CalcButton onClick={this.inputNum} className="calc-number">
							3
						</CalcButton>
						<CalcButton onClick={this.inputOpr} className="calc-operator">
							+
						</CalcButton>
					</div>
					<div className="calc-row">
						<ZeroButton onClick={this.inputNum} className="zero-number">
							0
						</ZeroButton>
						<CalcButton onClick={this.inputOpr} className="calc-number">
							.
						</CalcButton>
						<CalcButton onClick={this.inputOpr} className="calc-operator">
							=
						</CalcButton>
					</div>
				</div>
			</div>
		);
	}
}

export default CalcApp;
