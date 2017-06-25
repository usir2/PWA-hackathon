import React, { Component } from 'react';
import '../css/BodyContent.css';
import PostContent from './PostContent.js'
import AddPost from './AddPost.js'
export default class BodyContent extends Component {
  render() {
    return (
      <div className="BodyContent">
        <AddPost />
        <PostContent />
      </div>
    );
  }
}
