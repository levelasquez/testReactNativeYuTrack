const initialState = {
  loading: true,
  status: false,
  go: false,
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      const { email, password } = action.payload
      const status = email === 'test@yu-track.com'
        ? password === '12345678'
          ? false
          : true
        : true

      const go = status ? false : true

      return {
        ...state,
        status,
        go,
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
