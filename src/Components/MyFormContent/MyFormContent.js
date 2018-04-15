import React, { Component } from 'react';
import {Circle} from 'rc-progress';
import './MyFormContent.css';

class MyFormContent extends Component{
  constructor() {
    super();
    this.state = { value: 0 };
    this._increase();
  }
  _increase() {
    this.setState({ value: this.state.value + 1 });
    setTimeout(this._increase.bind(this), 1000);
  } 
  render(){
      return (
        <div>
          <ul>
            <li><input type="text" placeholder="Username *"/> </li>
            <li><input type="text" placeholder="Email Address *"/> </li>
            <li><input type="text" placeholder="Password *"/> </li>
            <li><input type="text" placeholder="Firstname"/> </li>
            <li><input type="text" placeholder="Lastname"/> </li>
            <li>
              <select>
                  <option value="Gender">Select Your Gender *</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
              </select>
            </li>
            <li><textarea placeholder="Bio"></textarea></li>
            <li><input type="text" placeholder="Facebook Profile URL"/> </li>
            <li><input type="text" placeholder="LinkedIn Profile URL"/> </li>
            <li><input type="submit" value="Register"/></li>
            </ul>
            <Circle percent="{this.state.value}" strokeWidth="4" strokeColor="#D3D3D3" className="circl"/>
        </div>
    );
  }
}
export default MyFormContent;
