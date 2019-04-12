import React from "react";

import CalcButton from "../components/CalcButton";

// 計算機 App

class CalcApp extends React.Component {
	constructor() {
		super();
		this.state = {
			now: " 0",
			storedValue: "",
			storedOperator: "",
			mode: 0,
		};
	}

	resetState() {
		this.setState({ now: " 0", storedValue: "", mode: 0, storedOperator: "" });
	}

	showNotImplemented() {
		console.warn("This function is not implemented yet.");
	}

	sign() {
		if (this.state.now[0] === "-") this.setState({ now: " " + this.state.now.substr(1) });
		else {
			this.setState({ now: "-" + this.state.now.substr(1) });
		}
	}

	number(e) {
		let now = this.state.now;
		if (this.state.storedOperator) {
			this.setState({ storedValue: now });
		}
		if (this.state.mode) {
			now = " 0";
			this.setState({ mode: 0 });
		}
		if (parseInt(now) === 0) {
			now = now[0] + e;
		} else {
			now += e;
		}
		this.setState({ now });
		console.log(this.state);
	}

	operator(e) {
		this.setState({ mode: 1 });

		if (this.state.storedValue) {
			let ans = this.calc();
			this.setState({ now: ans });
		}
		if (this.state.storedOperator) {
			this.setState({ storedOperator: e });
			return;
		}
		this.setState({ storedOperator: e });
	}

	calc() {
		console.log(this.state);
		const operator = this.state.storedOperator;
		let storedValue = this.state.storedValue;
		if (!this.state.storedValue) {
			storedValue = this.state.now;
		}
		switch (operator) {
			case "+":
				return Number(this.state.now) + Number(storedValue);
			case "-":
				return Number(storedValue) - Number(this.state.now);
			case "x":
				return Number(this.state.now) * Number(storedValue);
			case "÷":
				return Number(storedValue) / Number(this.state.now);
		}
		this.setState({ storedOperator: "" });
	}

	equal() {
		let now = this.state.now;
		console.log(this.state);
		if (!this.state.storedValue) {
			this.setState({ storedValue: this.state.now });
		}
		if (!(this.state.mode === 2)) {
			this.setState({ storedValue: now });
		}
		let ans = this.calc();
		console.log(ans);
		if (!Number.isInteger(ans)) ans = ans.toFixed(2);
		this.setState({ now: ans });
		this.setState({ mode: 2 });
	}

	percent() {
		let now = Number(this.state.now) * 0.01;
		this.setState({ now: now });
	}

	render() {
		return (
			<div className="calc-app">
				<div className="calc-container">
					<div className="calc-output">
						<div className="calc-display">{this.state.now}</div>
					</div>
					<div className="calc-row">
						<CalcButton onClick={() => this.resetState()}>AC</CalcButton>
						<CalcButton onClick={() => this.sign()}>+/-</CalcButton>
						<CalcButton onClick={() => this.percent()}>%</CalcButton>
						<CalcButton className="calc-operator" onClick={() => this.operator("÷")}>
							÷
						</CalcButton>
					</div>
					<div className="calc-row">
						<CalcButton className="calc-number" onClick={() => this.number("7")}>
							7
						</CalcButton>
						<CalcButton className="calc-number" onClick={() => this.number("8")}>
							8
						</CalcButton>
						<CalcButton className="calc-number" onClick={() => this.number("9")}>
							9
						</CalcButton>
						<CalcButton className="calc-operator" onClick={() => this.operator("x")}>
							x
						</CalcButton>
					</div>
					<div className="calc-row">
						<CalcButton className="calc-number" onClick={() => this.number("4")}>
							4
						</CalcButton>
						<CalcButton className="calc-number" onClick={() => this.number("5")}>
							5
						</CalcButton>
						<CalcButton className="calc-number" onClick={() => this.number("6")}>
							6
						</CalcButton>
						<CalcButton className="calc-operator" onClick={() => this.operator("-")}>
							-
						</CalcButton>
					</div>
					<div className="calc-row">
						<CalcButton className="calc-number" onClick={() => this.number("1")}>
							1
						</CalcButton>
						<CalcButton className="calc-number" onClick={() => this.number("2")}>
							2
						</CalcButton>
						<CalcButton className="calc-number" onClick={() => this.number("3")}>
							3
						</CalcButton>
						<CalcButton className="calc-operator" onClick={() => this.operator("+")}>
							+
						</CalcButton>
					</div>
					<div className="calc-row">
						<CalcButton className="calc-number bigger-btn" onClick={() => this.number("0")}>
							0
						</CalcButton>
						<CalcButton className="calc-number">.</CalcButton>
						<CalcButton className="calc-operator" onClick={() => this.equal()}>
							=
						</CalcButton>
					</div>
				</div>
			</div>
		);
	}
}

export default CalcApp;
