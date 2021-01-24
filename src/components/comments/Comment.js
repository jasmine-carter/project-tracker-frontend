import React from 'react';


const Comment = (props) => {

  console.log(props)
  return (
    <div key={props.comment.id}>
      {props.comment.content}
    </div>
  )
}

export default Comment;
