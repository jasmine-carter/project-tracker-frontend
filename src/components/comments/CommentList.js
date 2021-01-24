import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

  const {comments} = props

  const projectComments = comments.map(comment => {
    return(
      <div class="Comment" key={comment.id}><Comment
      key={comment.id}
      comment = {comment}
      />
      </div>
    )
  })

  return(
    <div>
      A list of comments
      {projectComments.length > 0 ? projectComments : "There aren't any notes about this project yet."}
    </div>
  )
}

export default CommentList;
