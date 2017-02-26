import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'

import Main from './component/Main';
import SingleQuote from './component/SingleQuote'
import QuoteGallery from './component/QuoteGallery'
import './index.css';

import store from './store/store'
import {history} from './store/store'

const router = (<Provider store={store}>
  <Router history={history}>
  <Route path='/' component={Main}>
    <IndexRoute component={QuoteGallery}/>
    <Route path='/quote/:quoteId' component={SingleQuote}/>
  </Route>
</Router>
</Provider>)

render(router,
  document.getElementById('root')
);
