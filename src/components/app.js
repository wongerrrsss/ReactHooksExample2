import React, { Component } from 'react';
import Align from "./exampleComponents/align"
import Clock from "./exampleComponents/clock"
import Color from "./exampleComponents/color"
import Counter from "./exampleComponents/counter"
import TextEnlarger from './exampleComponents/textEnlarger';
import Toggle from "./exampleComponents/toggle"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Align />
        <hr style={{width: "500px", margin: "10px" }}></hr>
        <Clock />
        <hr style={{width: "500px", margin: "10px" }}></hr>
        <Color />
        <hr style={{width: "500px", margin: "10px" }}></hr>
        <Counter />
        <hr style={{width: "500px", margin: "10px" }}></hr>
        <TextEnlarger />
        <hr style={{width: "500px", margin: "10px" }}></hr>
        <Toggle />

      </div>
    );
  }
}
