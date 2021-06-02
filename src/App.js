import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TokenContext } from './tokenContext'

import AdminContainer from './components/AdminContainer'
import Login from './components/Login'

import './App.css'

const App = () => {

  const [token, setToken] = useState('')

  return (
    <Router>
      <Switch>
        <TokenContext.Provider value={{ token, setToken }}>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={AdminContainer} />
        </TokenContext.Provider>
      </Switch>
    </Router>
  )
}

export default App
