import React, { Component, useEffect } from "react";
import "./App.css";
import axios from 'axios'

const axiosGet= () => {
    axios.get(`http://localhost:3333/smurfs`).then( r => console.log(r)); 
}
class App extends Component {

  
  render() {
    axiosGet(); 
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        
      </div>
    );
  }
}

export default App;
