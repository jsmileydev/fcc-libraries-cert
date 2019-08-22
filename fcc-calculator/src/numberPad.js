import React from 'react';

class NumberPad extends React.Component {
    render() {
      return (
        <div className="calculator" id="numpad">
          <button
            className="btn operator cell"
            id="divide"
            value="/"
            onClick={this.props.operator}
          >
            &divide;
          </button>
          <button
            className="btn operator cell"
            id="multiply"
            value="*"
            onClick={this.props.operator}
          >
            &times;
          </button>
          <button
            className="btn operator cell"
            id="subtract"
            value="-"
            onClick={this.props.operator}
          >
            -
          </button>
          <button
            className="btn operator cell"
            id="add"
            value="+"
            onClick={this.props.operator}
          >
            +
          </button>
          <button
            className="btn number cell"
            id="one"
            value="1"
            onClick={this.props.number}
          >
            1
          </button>
          <button
            className="btn number cell"
            id="two"
            value="2"
            onClick={this.props.number}
          >
            2
          </button>
          <button
            className="btn number cell"
            id="three"
            value="3"
            onClick={this.props.number}
          >
            3
          </button>
          <button
            className="btn cell"
            id="equals"
            value="="
            onClick={this.props.equal}
          >
            =
          </button>
          <button
            className="btn number cell"
            id="four"
            value="4"
            onClick={this.props.number}
          >
            4
          </button>
          <button
            className="btn number cell"
            id="five"
            value="5"
            onClick={this.props.number}
          >
            5
          </button>
          <button
            className="btn number cell"
            id="six"
            value="6"
            onClick={this.props.number}
          >
            6
          </button>
          <button
            className="btn number cell"
            id="seven"
            value="7"
            onClick={this.props.number}
          >
            7
          </button>
          <button
            className="btn number cell"
            id="eight"
            value="8"
            onClick={this.props.number}
          >
            8
          </button>
          <button
            className="btn number cell"
            id="nine"
            value="9"
            onClick={this.props.number}
          >
            9
          </button>
          <button
            className="btn operator cell"
            id="decimal"
            value="."
            onClick={this.props.decimal}
          >
            .
          </button>
          <button
            className="btn number cell"
            id="zero"
            value="0"
            onClick={this.props.number}
          >
            0
          </button>
          <button
            className="btn operator cell"
            id="clear"
            onClick={this.props.clear}
          >
            C
          </button>
        </div>
      );
    }
  }

  export default NumberPad;