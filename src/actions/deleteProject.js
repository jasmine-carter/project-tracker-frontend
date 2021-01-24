export function deleteProject(projectId) {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${projectId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'DELETE_PROJECT', payload: projectId}))
  }

}
