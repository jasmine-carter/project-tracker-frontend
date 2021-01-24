import React, { Component } from 'react';
import {connect} from 'react-redux';
import CommentInput from '../components/comments/CommentInput'
import CommentList from '../components/comments/CommentList'
import {addProjectComment} from '../actions/addProjectComment'

class CommentsContainer extends Component {


  render() {
    console.log(this.props)
    debugger;
    return (
      <div>
        CommentsContainer
        <CommentList comments={this.props.comments} project={this.props.project}/>
        <CommentInput project={this.props.project} addProjectComment={this.props.addProjectComment}/>
      </div>
    )
  }
}

const mapStateToProps = ({comments}) => {
    return {comments}
}


export default connect(mapStateToProps, {addProjectComment})(CommentsContainer);
