import React, { Component } from 'react';
import '../css/BodyContent.css';

export default class BodyContent extends Component {
  render() {
    return (
      <div className="BodyContent">

        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong> <small>:john@mail.com</small>
                  <br />
                  <div className="field">
                    <p className="control">
                      <input className="input" type="text" placeholder="Normal input" />
                    </p>
                  </div>
                  <div className="field">
                      <p className="control">
                        <div contentEditable="true" className="textarea" placeholder="Normal textarea">
                        <img src="http://bulma.io/images/placeholders/256x256.png" />
                        </div>
                      </p>
                  </div>
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item">
                    <i className="fa fa-camera-retro fa-2x" />
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>


        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Component
            </p>
            <a className="card-header-icon">
              <span className="icon">
                <i className="fa fa-angle-down "></i>
              </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item"><i className="fa fa-cloud-download fa-2x" aria-hidden="true"></i>
            Save</a>
            <a className="card-footer-item"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
            Edit</a>
            <a className="card-footer-item"><i className="fa fa-window-close fa-2x" aria-hidden="true"></i>
            Delete</a>
          </footer>
        </div>
      </div>
    );
  }
}
