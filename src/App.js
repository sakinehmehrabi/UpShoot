import React, { Component } from 'react';
// import Home from './Components/Home';
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
// import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApplicationForm/>
      {/* <Home/> */}
      </div>
    );
  }
}

export default App;
