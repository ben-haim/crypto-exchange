import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import MarketsPage from './Routes/MarketsPage'
import TradePage from './Routes/TradePage'
import Header from './Header'
import '../styles/index.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route path='/' component={MarketsPage} exact />
              <Route path='/trade/:pair' render={this.tradePage} exact />
              <Redirect from='/trade' exact to='/trade/USDT-BTC'/>
          </Switch>
      </div>
    );
  }

  tradePage = ({match}) => {
      return <TradePage pair = {match.params.pair} />
  }
}

export default App;
