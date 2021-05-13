import React, { Component, ChangeEvent } from 'react';
// import logo from './logo.svg';
import './App.css';

const OFFSET: number = 48;

interface State {
  bits: Array<number>;
  error: boolean;
}

const calculateDecimal = (arr: Array<number>) => {
  let base = 1;
  let result = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    result += base * arr[i];
    base *= 2;
  }
  return result;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      bits: [],
      error: false,
    }
  }

  inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let bitString: string = event.target.value;
    // let tempArr: Array<number> = [];
    const newState: State = {
      bits: [],
      error: false,
    }
    for (let i = 0; i < bitString.length; i++){
      let temp: number = bitString.charCodeAt(i) - OFFSET;
      if (temp > 1 || temp < 0) {
        newState.error = true;
        break;
      }
      newState.bits.push(temp);
  
    }
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <input placeholder="Please put in binary string" onChange={this.inputOnChange}></input>
        {this.state.error ? <p> You should only put 0 and 1!</p> : <p>The value is {calculateDecimal(this.state.bits) }</p>}
        
      </div>
    )
  }
}

export default App;
