import logo from "./logo.svg";
import "./App.css";
import Counters from "./Components/Counters";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
class App extends Component {
  state = {
    CounterValues: [
      { id: 1, Value: 4 },
      { id: 2, Value: 3 },
      { id: 3, Value: 2 },
      { id: 4, Value: 1 },
    ],
  };
  HandleDelete = (counterId) => {
    console.log("evenhandler for delete", counterId);
    const CounterValues = this.state.CounterValues.filter(
      (y) => y.id !== counterId
    );
    this.setState({
      CounterValues: CounterValues,
    });
  };

  HandleReset = () => {
    // const rest = this.state.CounterValues.map((c) => {
    //   const cVal = { id: c.id, value: 0 };
    //   return cVal;
    // });
    // console.log(rest);
    const CounterValues = this.state.CounterValues.map((v) => (v.Value = 0));
    // this.setState(this.state.CounterValues.map((v) => (v.Value = 0)));
    this.setState(CounterValues);
  };

  HandleIncrement = (CounterValue) => {
    const CounterValues = [...this.state.CounterValues];
    const Index = CounterValues.indexOf(CounterValue);
    CounterValues[Index] = { ...CounterValue };
    CounterValues[Index].Value++;
    this.setState({ CounterValues });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={
            this.state.CounterValues.filter((x) => x.Value > 0).length
          }
        />
        <Counters
          onClick={this.HandleReset}
          onIncrement={this.HandleIncrement}
          onDelete={this.HandleDelete}
          CounterValues={this.state.CounterValues}
        />
      </React.Fragment>
    );
  }
}

export default App;
