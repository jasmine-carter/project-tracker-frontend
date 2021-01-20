export function fetchProjects() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_PROJECTS_REQUEST'});
    fetch('http://localhost:3000/api/v1/projects')
    .then(response => response.json())
    .then(projects => dispatch({ type: 'ADD_PROJECT', projects }));
  };
}