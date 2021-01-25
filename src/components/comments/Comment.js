import React from 'react';


const Comment = (props) => {

  return (
    <div key={props.comment.id}>
      {props.comment.content} {' '}
      <button class="delete-comment-button">X</button>
    </div>
  )
}

export default Comment;
