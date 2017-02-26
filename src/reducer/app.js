const app = (
  state={
  error: false,
  loading: false,
  loaded: false
}, action) => {
  switch (action.type) {
    case 'APP_ERROR':
      return {...state, error: true};
    case 'APP_LOADING':
      return {...state, loading: true};
    case 'APP_LOADED':
      return {...state, loaded: true};
    default:
      return state;
  }
}

export default app
