import React, { Component } from 'react';
import {connect} from "react-redux";
import * as firebase from 'firebase';

class AddPost extends Component {
  constructor(props){
    super(props);
    this.state={
      picPath:"http://bulma.io/images/placeholders/128x128.png",
      postBody:""
    };
    this.postBodyChange = this.postBodyChange.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      picPath:nextProps.user.picPath
    })
    //console.log("NEXT",)

  }

  postBodyChange(event){
    this.state.postBody = event.target.value;
  }

  savePostFirebase(){
    const that = this
    var firebaseRef = firebase.database().ref("Post/");
    //console.log("POST NA JA :",that.props.user.email+this.state.picPath+that.state.postBody)
    firebaseRef.push({
      email: that.props.user.email,
      profilePhoto: this.state.picPath,
      postBody: that.state.postBody,
      postPhoto:""
    });
  }



  render() {
    const emailSplit=this.props.user.email.split("@",1)
    const that = this
    //console.log(emailSplit)
    return (
      <div className="AddPost">
      {
        (this.props.user.userKey==="xxx") ?

          <div></div>

        :

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
                          <textarea  className="textarea" placeholder="Wrire Somethings.." onChange={that.postBodyChange}>
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
                <a className="button is-primary" onClick={()=>that.savePostFirebase()}>POST</a>

              </div>
            </article>

          </div>

      }

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
