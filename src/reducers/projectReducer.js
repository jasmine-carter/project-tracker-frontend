//responsible for updating the store as it pertains to projects

export default function projectReducer(state = { projects: []}, action) {
  switch (action.type) {
    //case 'ADD_PROJECT'

    case 'FETCH_PROJECTS':
    //debugger;
    return { projects: action.payload }
    //case 'DELETE_PROJECT'

    case 'ADD_PROJECT':
   // debugger;
    return {
    ...state,
    projects: [...state.projects, action.payload]
    }

    case 'DELETE_PROJECT':
    debugger;
    const projects = state.projects.filter(project => project.id !== parseInt(action.payload))
    return {...state, projects}

    default:
    return state;

  }
}
