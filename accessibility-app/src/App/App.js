import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  Switch
} from "react-router-dom"
import About from '../About/About'
import Tools from '../Tools/Tools'
import Resources from '../Resources/Resources'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
  }
  render() {
    return (
      <div role="navigation" aria-label="Primary"> 
        <div className="nav">
          <div className="nav-item"><span className="nav-logo">Tools</span></div>
          <div className="nav-item"><Link to="/home">Home</Link></div>
          <div className="nav-item"><Link to="/about">About</Link></div>
        </div>
    
     <div className="main">
        <Switch> 
        <Route path = '/about' component= {About}/>
        <Route path = '/tools' component= {Tools}/>
        <Route path = '/resources' component = {Resources}/>
        </Switch>
        </div> 
     
    </div>
    );
  }
}

export default App;
