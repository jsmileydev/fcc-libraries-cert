import React from 'react';
import NumberPad from './numberPad';

class Display extends React.Component {
	render() {
		return (
			<div id="screen" className="calculator">
				<div id="formula" className="output">
					{this.props.formula}
				</div>
				<div id="display" className="output">
					{this.props.answer}
				</div>
			</div>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formula: '0',
			answer: '0',
			evaluated: false
		};
		this.handleClear = this.handleClear.bind(this);
		this.handleEqual = this.handleEqual.bind(this);
		this.handleDecimal = this.handleDecimal.bind(this);
		this.handleNumber = this.handleNumber.bind(this);
		this.handleOperator = this.handleOperator.bind(this);
	}

	handleNumber(e) {
		//check if answer is a number
		var numTest = /\d|\./.test(this.state.answer);
		//check if last value in formula is an operator
		var lastVal = this.state.formula.slice(-1);
		var opTest = /\D/.test(lastVal);
		//if display is empty & clear or equals were last btn clicked
		if (this.state.formula === '0' || this.state.evaluated === true) {
			this.setState({
				formula: e.target.value,
				answer: e.target.value,
				evaluated: false
			});
			//if display isn't empty & answer is a number (continue adding num to answer, not replace)
		} else if (this.state.formula != '0' && numTest == true) {
			const newForm = this.state.formula + e.target.value;
			const newAns = this.state.answer + e.target.value;
			this.setState({
				formula: newForm,
				answer: newAns,
				evaluated: false
			});
			//if display isn't empty, & answer is not a number
		} else {
			const newForm = this.state.formula + e.target.value;
			this.setState({
				formula: newForm,
				answer: e.target.value,
				evaluated: false
			});
		}
	}

	handleOperator(e) {
		//check if last value in formula is an operator
		var operator = /\D/g;
		var lastOp = this.state.formula.slice(-1);
		//if evaluated is true, add operator to previous answer
		if (this.state.evaluated === true) {
			const newForm = this.state.answer + e.target.value;
			this.setState({
				formula: newForm,
				answer: e.target.value,
				evaluated: false
			});
			//if lastOp is true, replace last operator with new target
		} else if (lastOp === '*' || lastOp === '/' || lastOp === '-' || lastOp === '+') {
			const newForm = this.state.formula.slice(0, -1) + e.target.value;
			this.setState({
				formula: newForm,
				answer: e.target.value
			});
			//if evaluated is false & answer is a number
		} else {
			const newForm = this.state.formula + e.target.value;
			this.setState({
				formula: newForm,
				answer: e.target.value,
				evaluated: false
			});
		}
	}

	handleDecimal(e) {
		//check if last value in formula is an operator
		var lastVal = this.state.formula.slice(-1);
		var opTest = /\D/.test(lastVal);
		//check if answer is a number or a decimal
		//var numTest = /\d|\./.test(this.state.answer);
		var pointTest = /\./.test(this.state.answer);
		const newForm = this.state.formula + e.target.value;
		const newAns = this.state.answer + e.target.value;
		//if the answer doesn't contain a decimal, allow decimal to be added to formula & answer
		if (!pointTest) {
			this.setState({
				formula: newForm,
				answer: newAns,
				evaluated: false
			});
		}
	}

	handleClear() {
		//return formula & answer to 0, reset evaluated to true
		this.setState({
			formula: '0',
			answer: '0',
			evaluated: true
		});
	}

	handleEqual() {
		let total = eval(this.state.formula);
		//eval(this.state.formula).toString();
		const newForm = this.state.formula + ' = ' + total;
		//display complete formula with total in formula, and only total in answer, with evaluated reset to true
		this.setState({
			formula: newForm,
			answer: total,
			evaluated: true
		});
		console.log(total);
	}

	render() {
		const formula = this.state.formula;
		const answer = this.state.answer;
		return (
			<div id="calculator">
				<Display formula={formula} answer={answer} />
				<NumberPad
					operator={this.handleOperator}
					number={this.handleNumber}
					equal={this.handleEqual}
					decimal={this.handleDecimal}
					clear={this.handleClear}
				/>
			</div>
		);
	}
}

export default Calculator;