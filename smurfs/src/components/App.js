import React, { Component } from "react";
import "./App.css";
 

import Village from './Village'; 




class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Village />
        
      </div>
    );
  }
}

export default App;
