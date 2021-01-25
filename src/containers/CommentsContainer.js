import React, { Component } from 'react';
import {connect} from 'react-redux';
import CommentInput from '../components/comments/CommentInput'
import CommentList from '../components/comments/CommentList'
import {fetchProjectComments} from '../actions/fetchProjectComments'

class CommentsContainer extends Component {

  componentDidMount(){
    this.props.fetchProjectComments(this.props.project.id)
    console.log("component mounted")
  }

  render() {


    return (
      <div>
        <CommentList comments={this.props.comments.comments} project={this.props.project}/>
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


export default connect(mapStateToProps, {fetchProjectComments})(CommentsContainer);
