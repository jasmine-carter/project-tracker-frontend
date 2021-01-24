export function updateProject(projectId, project) {
  debugger;
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(project)
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'UPDATE_PROJECT', payload: project}))
  }
}
