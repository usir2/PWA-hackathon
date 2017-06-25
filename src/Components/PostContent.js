import React, { Component } from 'react';
import {connect} from "react-redux";

import * as firebase from 'firebase';

class PostContent extends Component {
  constructor(props){
    super(props);
    //this.getAllPostContent = this.getAllPostContent.bind(this)
    this.getAllPostContent()
  }

  getAllPostContent(){
    const that =  this;
    var getPostRef = firebase.database().ref("Post");
    getPostRef.on('value', function(dataSnapshot) {
			   dataSnapshot.forEach(function(childSnapshot) {
	      		that.props.user.dataPost.push({
              keyPost: childSnapshot.key,
              dataPost:childSnapshot.val()
            })

  			});


        that.props.user.dataPost.map(function(obj, i) {
          console.log("data from post : ", obj)

        })
        that.forceUpdate()

		});

/*    console.log("data from post : ", that.state.data.)*/

  }
  componentWillReceiveProps(nextProps){

    //console.log("NEXT",)

  }
  setData(props){
    return(
      <div>
      {
      props.data.map(function(obj, i){
        return(
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={obj.dataPost.profilePhoto} alt="Image" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{obj.dataPost.email.split("@",1)}</strong><br/> <small>{obj.dataPost.email}</small>
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
                {obj.dataPost.postBody}
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
        console.log("data MA MAP",obj)
      })};
      </div>
    )
  }

  render(){



    return(
      <div className="PostContent">
      <this.setData data={this.props.user.dataPost} />


    </div>
    )
  }
}
const mapStatetoProps=(state)=>{
  return {
    user:state.user
  }
}
const mapDispatchtoProps=(dispatch)=>{
  return {
    setDataPost:(data)=>{
      dispatch({
        type:"setDataPost",
        payload:data
      })
    }
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(PostContent)
