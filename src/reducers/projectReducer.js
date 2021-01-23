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
    ///debugger;
    let projects = state.projects.filter(project => project.id !== parseInt(action.payload))
    return {...state, projects}

    case 'ADD_PROJECT_MATERIAL':
    debugger;
      let projects1 = state.projects.map(project => {
        if (project.id === action.payload.id) {
          return action.payload
        } else {
          return project
        }
      })
    return {...state, projects: projects1}

    case 'DELETE_PROJECT_MATERIAL':
    debugger;
    let projects2 = state.projects.map(project => {
      if (project.id === action.payload.id) {
        return action.payload
      } else {
        return project
      }
    })
    return {...state, projects: projects2}
    
    default:
    return state;

  }
}
