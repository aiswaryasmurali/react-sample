import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  /* constructor() {
    super();
    this.IncrementCount = this.IncrementCount.bind(this);
  } */
  // state = {
  //   Count: this.props.CounterValue.Value,

  //   // tags: ["tag1", "tag2", "tag3"],
  // };
  // IncrementCount = () => {
  //   console.log(this.state.Count);
  //   this.setState({ Count: this.state.Count + 1 });
  // };

  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getClassCounter()}>
          <h1>{this.FormatCount()}</h1>
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.CounterValue)}
          className="btn btn-secondary btn-sm m-4"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.CounterValue.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.getRenderTag()} */}
      </div>
    );
  }

  getRenderTag() {
    if (this.state.tags.length === 0) return <p>{"there is no tag"}</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getClassCounter() {
    let classes = "badge m-2 badge-";
    classes += this.props.CounterValue.Value === 0 ? "warning" : "primary";
    return classes;
  }

  FormatCount() {
    const { Value } = this.props.CounterValue;
    return Value === 0 ? "Zero" : Value;
  }
}

export default Counter;
