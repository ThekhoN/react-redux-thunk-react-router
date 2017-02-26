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
    return (<div className='singleQuote'>

      <div className='quoteContainer'>
        {currentQuote ? currentQuote.quote : ''}
        <br/>
        -{currentQuote ? currentQuote.author: ''}
        <p>submitted by:<br/>
          {currentQuote? currentQuote.submittedBy : ''}
        </p>
      </div>

    </div>)
  }
}
