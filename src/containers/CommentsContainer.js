import React, { Component } from 'react';
import {connect} from 'react-redux';
import CommentInput from '../components/comments/CommentInput'
import CommentList from '../components/comments/CommentList'


class CommentsContainer extends Component {

  render() {
    console.log(this.props.project.comments)
    return (
      <div>
        CommentsContainer
        <CommentList comments={this.props.project.comments}/>
        <CommentInput project={this.props.project}/>
      </div>
    )
  }
}

const mapStateToProps = ({comments}) => {
  return { comments }
}


export default connect(mapStateToProps)(CommentsContainer);
