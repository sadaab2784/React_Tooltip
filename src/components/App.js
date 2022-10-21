// ------------------------------------------------App.js Component------------------------------------------------

// ----------------Importing React,& files from component----------------
import React from 'react';
import './App.css';
import Tool from './tool';
import SelectPostition from './selectPostition';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showToolTip: false,
       position: "top"     //    default  value for position & showTooltip
    }
  }

  //Function for changTooltip Position
  changeShowToolTip = () => {
    console.log('Mouse Over!')
    const { showToolTip } = this.state;
    let position = document.getElementById("positions").value;  // getting position from user
    this.setState({
      showToolTip: !showToolTip,
      position
    });
  }
  render(){
    return (
      <div className="App">
        <Tool 
        state={this.state}
        changeShowToolTip = {this.changeShowToolTip}
        />
        <SelectPostition />
      </div>
    );
  }
}

export default App;
