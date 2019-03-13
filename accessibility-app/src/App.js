import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        accessibility 
      </header>
      <div role="navigation" aria-label="Primary">
      <nav> 
      <ul className="menu">
        <li className="menu__item">
          <a href="/about" className="menu__link">learn more</a>
          <ul className="submenu">
            <li className="submenu__item">
              <a className="submenu__link" href="/about/why">Why</a>
            </li>
            <li className="submenu__item">
              <a className="submenu__link" href="/about/what">What</a>
            </li>
            <li className="submenu__item">
              <a className="submenu__link" href="/about/how">How</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>  
    </div>
    );
  }
}

export default App;
