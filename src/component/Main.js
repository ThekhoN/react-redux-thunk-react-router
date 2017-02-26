import React, {Component} from 'react'
import {connect} from 'react-redux'
//import {bindActionCreators} from 'redux'
//import * as actionCreators from '../action/actionCreators'
import {addQuote, removeQuote, updateQuote, initGetQuotes, onfetchQuotesDispatch} from '../action/actionCreators'


import 'whatwg-fetch'

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
    app: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  //return bindActionCreators(actionCreators, dispatch)
  return {
    onDispatchAddQuote: (quote) => {
      dispatch(addQuote(quote))
    },
    onDispatchRemoveQuote: (id) => {
      dispatch(removeQuote(id))
    },
    onDispatchUpdateQuote: (quote) => {
      dispatch(updateQuote(quote))
    },
    onDispatchInitGetQuotes: (quotes) => {
      dispatch(initGetQuotes(quotes))
    },
    handleFetchQuotes: (url) => {
      dispatch(onfetchQuotesDispatch(url))
    }
  }
}

class MainComponent extends Component {
  componentDidMount(){
      const url = 'http://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes'
      this.props.handleFetchQuotes(url)
      console.log('this.props.quotes: ', this.props.quotes);
  }
  render(){
    return (<div>
      <h2>Main Component</h2>
    {React.cloneElement(this.props.children, this.props)}
  </div>)
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)

export default Main
