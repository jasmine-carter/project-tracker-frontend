import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

  const {comments} = props

  return(
    <div class="CommentList">
      <ul>
      <h3>Project Notes</h3>
        {props.comments.length >= 1 && props.comments.map(comment =>
          <li class="Comment" key={comment.id}><Comment
            key={comment.id}
            comment = {comment}
            deleteComment={props.deleteComment}
          /></li>)}
      </ul>
    </div>
  )
}

export default CommentList;
