import React, { Component, useState } from "react";
import "../styles/App.css";

let relatives = ["Bhanu", "Prasad", "Doddipati"];

class App extends Component {
  render() {
    return (
      <div id="main">
        <ol key="relativeList"> List 
            { relatives.map( (ele,index) => <li key={ele+index}>{ele}</li>) }
        </ol>
      </div>
    );
  }
}

export default App;
