import React, { Component } from 'react';
import {connect} from "react-redux";

class AddPost extends Component {
  constructor(props){
    super(props);
    this.state={
      picPath:"http://bulma.io/images/placeholders/128x128.png"
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      picPath:nextProps.user.picPath
    })
    console.log("NEXT",)
  }


  render() {
    const emailSplit=this.props.user.email.split("@",1)
    console.log(emailSplit)
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.state.picPath} alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{emailSplit}</strong> <small>{this.props.user.email}</small>
                <br />
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
const mapStatetoProps=(state)=>{
  return {
    user:state.user
  }
}

export default connect(mapStatetoProps)(AddPost)
