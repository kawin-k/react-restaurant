import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import BillingPage from './components/BillingPage'
import PromotionEditorPage from './components/PromotionEditorPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={BillingPage} exact={true} />
          <Route path="/edit" component={PromotionEditorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div> 
      </BrowserRouter>
    )
  }
}
const NotFoundPage = () => (
  <div>
    <p>Error 404</p>
  </div>
)
export default App
