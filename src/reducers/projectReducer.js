//responsible for updating the store as it pertains to projects

export default function projectReducer(state = { projects: []}, action) {
  switch (action.type) {
    //case 'ADD_PROJECT'

    case 'FETCH_PROJECTS':
    //debugger;
    return { projects: action.payload }

    case 'ADD_PROJECT':
   debugger;
    return {
    ...state,
    projects: [...state.projects, action.payload]
    }

    case 'UPDATE_PROJECT':
    debugger;
    let projects3 = state.projects.map(project => {
      if (project.id === action.payload.id) {
        return action.payload
      } else {
        return project
      }
    })
    return {...state, projects: projects3}

    case 'DELETE_PROJECT':
    //debugger;
    let projects = state.projects.filter(project => project.id !== parseInt(action.payload))
    return {...state, projects}

    case 'ADD_PROJECT_MATERIAL':
    //debugger;
      let projects1 = state.projects.map(project => {
        if (project.id === action.payload.id) {
          return action.payload
        } else {
          return project
        }
      })
    return {...state, projects: projects1}

    case 'DELETE_PROJECT_MATERIAL':
    //debugger;
    let projects2 = state.projects.map(project => {
      if (project.id === action.payload.id) {
        return action.payload
      } else {
        return project
      }
    })
    return {...state, projects: projects2}

    case 'UPDATE_PROJECT_MATERIAL':
    //debugger;
    let projects4 = state.projects.map(project => {
      if (project.id === action.payload.id) {
        return action.payload
      } else {
        return project
      }
    })
    return {...state, projects: projects4}

    default:
    return state;

  }
}
