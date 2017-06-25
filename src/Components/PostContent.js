import React, { Component } from 'react';

export default class PostContent extends Component {
 render(){
    return(
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong><br/> <small>:john@mail.com</small>
                </p>
              </div>
            </div>
          </article>
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
    )
 }
}
