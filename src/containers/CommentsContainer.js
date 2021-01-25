import React, { Component } from 'react';
import {connect} from 'react-redux';
import CommentInput from '../components/comments/CommentInput'
import CommentList from '../components/comments/CommentList'
import {fetchProjectComments} from '../actions/fetchProjectComments'
import {deleteComment} from '../actions/deleteComment'

class CommentsContainer extends Component {

  componentDidMount(){
    //console.log(this.props)
    if (this.props.project != undefined){
      this.props.fetchProjectComments(this.props.project.id)
    } else {
      console.log("no projects here yet")
    }
  }

  render() {
    return (
      <div>
        <CommentList comments={this.props.comments.comments} project={this.props.project} deleteComment={this.props.deleteComment}/>
        <CommentInput project={this.props.project} addProjectComment={this.props.addProjectComment}/>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      comments: state.comments
    }
  }


export default connect(mapStateToProps, {fetchProjectComments, deleteComment})(CommentsContainer);
