import React, { Component } from 'react';
import '../css/Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="nav hFirst">
          
          <div className="nav-center">
            <a className="nav-item">
            EZ BOARD
            </a>
          </div>

        </nav>
        <nav className="nav hSecond">
          <div className="nav-center">
            <a className="nav-item is-active  is-tab">
              Home
            </a>
            <a className="nav-item">
              Documentation
            </a>
            <a className="nav-item">
              Blog
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
