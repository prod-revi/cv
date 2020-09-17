const sessionReducer = (
  state = {
    authenticated: false
  },
  action
) => {
  switch (action.type) {
    case 'SET_USER':
      return [
        ...state,
        {
          user: action.user
        }
      ]
    case 'SET_AUTHENTICATION':
      return {
        ...state,
        authenticated: action.payload
      }
    default:
      return state
  }
}

export default sessionReducer
