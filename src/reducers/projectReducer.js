//responsible for updating the store as it pertains to projects

export default function projectReducer(state = { projects: [], comments: []}, action) {
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

    case 'ADD_PROJECT_COMMENT':
    debugger;
    const comment = {content: action.payload.content, project_id: action.payload.project_id, id: action.payload.id}
    return {
      ...state,
      comments:[...state.comments, comment]
    }

    default:
    return state;

  }
}
