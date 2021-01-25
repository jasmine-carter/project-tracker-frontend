export function deleteComment(projectId, commentId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${projectId}/comments/${commentId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'DELETE_COMMENT', payload: project}))
  }
}
