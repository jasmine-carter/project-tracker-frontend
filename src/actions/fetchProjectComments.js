import commentReducer from '../reducers/commentReducer'
export function fetchProjectComments(project_id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/projects/${project_id}/comments`)
    .then(response => response.json())
    .then(comments => dispatch({ type: 'FETCH_PROJECT_COMMENTS', payload: comments }));
  }
}
