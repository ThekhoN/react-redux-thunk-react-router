export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote // obj {quote, author, tag, submittedBy}
  }
}

export const removeQuote = (id) => {
  return {
    type: 'REMOVE_QUOTE',
    id //remove by id
  }
}

export const updateQuote = (quote) => {
  return {
    type: 'UPDATE_QUOTE',
    quote //conditonal change by id only based on payload
  }
}

//onMount get all quotes
export const initGetQuotes = (quotes) => {
  console.log('running initGetQuotes. . .');
  console.log('quotes initGetQuotes:', quotes);
  return {
    type: 'INIT_GET_QUOTES',
    quotes
  }
}

const dispatchAppError = (bool) => {
  return {
    type:'APP_ERROR',
    isLoading:bool
  }
}

const dispatchAppLoading = (bool) => {
  return {
    type:'APP_LOADING',
    isLoading:bool
  }
}

const dispatchAppLoaded = (bool) => {
  return {
    type:'APP_LOADED',
    loadSuccess:bool
  }
}

export const onfetchQuotesDispatch = (url) =>  {
  return (dispatch) => {
    console.log('running fetchQuotes. . .');
      //dispatch 'APP_LOADING' true
      dispatchAppLoading(true)
      fetch(url)
      .then(response => {
        if(!response.ok){
          throw Error(response.statusText)
        }
        //dispatch 'APP_LOADING' is loading false
        dispatchAppLoading(false)
        return response
      })
      .then(response => response.json())
      .then(items => {
        console.log('items from fetch: ', items);
        //dispatch 'INIT_GET_QUOTES'
        dispatchAppLoaded(true)
        dispatch(initGetQuotes(items))

      })
      .catch(err => {
        //dispatch 'APP_ERRORED'
        dispatchAppError(true)
        console.log('fetch error: ', err);
      })
  }
}
