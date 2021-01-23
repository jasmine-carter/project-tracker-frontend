export function deleteMaterial(projectId, materialId) {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${projectId}/materials/${materialId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'DELETE_PROJECT_MATERIAL', payload: project}))
  }
}
