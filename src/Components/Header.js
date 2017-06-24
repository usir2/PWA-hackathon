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
              <i className="fa fa-newspaper-o" aria-hidden="true" />
              News
            </a>
            <a className="nav-item">
              <i className="fa fa-video-camera" aria-hidden="true"></i>
              Movies
            </a>
            <a className="nav-item">
              <i className="fa fa-gamepad" aria-hidden="true" />
              Games
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
