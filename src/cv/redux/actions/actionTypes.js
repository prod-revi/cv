const ADD_TODO = 'ADD_TODO'


{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}

{
  type: 'ADD_TODO',
  payload: {
      text: 'Aprender Redux',
  },
}

{
  type: COMPLETE_TODO,
  index: 5
}

{
  type: SET_VISIBILITY_FILTER,
  filter: SHOW_COMPLETED
}