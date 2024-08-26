import React, { Component } from 'react'; 

// Step 1: Define the interface for the state
interface CounterState {
  count: number; // 'count' is a number
}

// Step 2: Define the interface for props (if any; empty in this case)
interface CounterProps {}

// Step 3: Apply the state and props interfaces in the class component
class Counter extends Component<CounterProps, CounterState> {
  // Initialize state with the defined type
  state: CounterState = {
    count: 0,
  };

  // Ensure increment method works with the defined state type
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 

  render() { 
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div> 
    );
  }
}

export default Counter;
