import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

  const {comments} = props

  const projectComments = comments.map(comment => {
    return(
      <div class="Comment" key={comment.id}><li><Comment
      key={comment.id}
      comment = {comment}
      /></li>
      </div>
    )
  })

  return(
    <div>
      <ul>
      <h3>Project Notes</h3>
      {projectComments.length > 0 ? projectComments : "There aren't any notes about this project yet."}
      </ul>
    </div>
  )
}

export default CommentList;
