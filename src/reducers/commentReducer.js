

export default function commentReducer(state = {comments: []}, action)  {
  switch (action.type) {
    case 'FETCH_PROJECT_COMMENTS':
      return {comments: action.payload}

    case 'ADD_PROJECT_COMMENT':
      return {
        ...state,
        comments: [...state.comments, action.payload]}

    default:
    return state

  }
}
