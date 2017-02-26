import React, {Component} from 'react'
import {Link} from 'react-router'

export default class QuoteGallery extends Component {
  render(){
    const {quotes} = this.props
    return (<div className='quoteGallery'>
      {
        quotes.map(quote => (<li className='quoteUnit m-raised' key={quote.id}>
          <Link to={`/quote/${quote.id}`}>{quote.quote}</Link>
        </li>))
      }
    </div>)
  }
}
