//responsible for updating the store as it pertains to projects

export default function projectReducer(state = { projects: [], requesting: false}, action) {
  switch (action.type) {
    //case 'ADD_PROJECT':
    case 'START_ADDING_PROJECTS_REQUEST':
    return {
      ...state,
      projects: [...state.projects],
      requesting: true
    }

    case 'ADD_PROJECT':
    //debugger;
    return {
      ...state,
      projects: action.projects,
      requesting: false
    }
    //case 'DELETE_PROJECT':
    default:
    return state;
  }
}
