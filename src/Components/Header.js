import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </a>
          </div>






          <div className="nav-right">


            <div className="nav-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button" >
                    <span className="icon">
                      <i className="fa fa-twitter"></i>
                    </span>
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary">
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <nav className="nav">


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
