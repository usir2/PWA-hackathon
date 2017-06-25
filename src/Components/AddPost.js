import React, { Component } from 'react';

export default class AddPost extends Component {
  render() {
    return (
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
                      <textarea  className="textarea" placeholder="Normal textarea">
                      </textarea>
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
    )
  }
}
