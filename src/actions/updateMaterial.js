export function updateMaterial(projectId, materialId, material) {
  debugger;
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${projectId}/materials/${materialId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(material)
    })
    .then(response => response.json())
    .then(project => dispatch({type: 'UPDATE_PROJECT_MATERIAL', payload: project}))
  }
}
