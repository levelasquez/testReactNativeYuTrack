const initialState = {
  // email: '',
  // password: '',
  // validate: false,
  loading: true,
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
      }
    case 'LOADING_END':
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
