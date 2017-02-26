import React, {Component} from 'react'

export default class SingleQuote extends Component {

  render(){
    const {params, quotes} = this.props
    const currentQuote = quotes.filter(quote => {
      //console.log('typeof quote.id: ', typeof quote.id);
      //console.log('typeof params.quoteId: ', typeof params.quoteId);
      return quote.id === params.quoteId
    })[0]
    //console.log('currentQuote: ', currentQuote);
    return (<div>
      <h3>SingleQuote Component</h3><br/>
      <br/>
      <div className='quoteContainer'>
        {currentQuote ? currentQuote.quote : ''}
        <br/>
        -{currentQuote ? currentQuote.author: ''}
      </div>
      <p>submitted by:<br/>
        {currentQuote? currentQuote.submittedBy : ''}
      </p>
    </div>)
  }
}
