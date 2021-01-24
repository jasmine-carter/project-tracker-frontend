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
        <CommentInput project={this.props.project}/>
        <CommentList comments={this.props.project.comments}/>
      </div>
    )
  }
}

const mapStateToProps = ({comments}) => {
  return { comments }
}


export default connect(mapStateToProps)(CommentsContainer);
