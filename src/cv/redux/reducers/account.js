const account = (state = {}, action ) => {
  switch (action.type) {
    case 'IS_USER':
      return [
        ...state,
        {
          user: action.user
        }
      ]
    case 'AUTHENTICATED':
      console.log(state)
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      }
    default:
      return state
  }
}

export default account