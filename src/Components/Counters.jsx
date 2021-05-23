import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
         
          onClick={this.props.onClick}
          className="btn btn-primary btn-sm m-4"
        >
          Reset
        </button>
        {this.props.CounterValues.map((CounterValue) => (
          <Counter
            key={CounterValue.id}
            onIncrement={this.props.onIncrement}
            // Value={CounterValue.Value}
            onDelete={this.props.onDelete}
            // id={CounterValue.id}
            CounterValue={CounterValue}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
