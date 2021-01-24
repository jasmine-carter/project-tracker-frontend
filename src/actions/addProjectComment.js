export function addProjectComment(data, project_id){
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${project_id}/comments`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(comment =>{
      if (comment.error) {
        alert(comment.error)
      } else {
        dispatch({type: 'ADD_PROJECT_COMMENT', payload: comment})
      }
    })
  }

}
