import React from 'react';


const Comment = (props) => {

  const handleOnDelete = () => {
    console.log(props)
    let commentId = props.comment.id
    let projectId = props.comment.project_id
    props.deleteComment(projectId, commentId)
  }

  return (
    <div key={props.comment.id}>
      {props.comment.content} {' '}
      <button class="delete-comment-button" onClick={handleOnDelete}>X</button>
    </div>
  )
}

export default Comment;
