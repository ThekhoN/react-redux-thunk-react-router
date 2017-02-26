const app = (
  state={
  error: false,
  loading: false,
  loaded: false
}, action) => {
  switch (action.type) {
    case 'APP_ERROR':
      return {...state, error: action.error};
    case 'APP_LOADING':
      return {...state, loading: action.loading};
    case 'APP_LOADED':
      return {...state, loaded: action.loaded};
    default:
      return state;
  }
}

export default app
