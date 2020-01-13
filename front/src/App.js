// Librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components & screens
import Header from './components/Header'
import HomePage from './screen/HomePage'

// Styles
import './App.css'


const App = () => {
  return (
    <div className="App">

      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
