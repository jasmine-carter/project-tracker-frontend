export function addMaterial(data, project_id) {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${project_id}/materials`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(material =>{
      if (material.error) {
        alert(material.error)
      } else {
        dispatch({type: 'ADD_PROJECT_MATERIAL', payload: material})
      }
    }
   )
  }
}
