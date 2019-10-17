import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './components/Sidebar'
import Main from './components/Main'

class App extends React.Component{
  render(){
    return(
      <div className="wrapper">
      <Router>
        <SideBar />
        <Route path='/' component={Main} />
      </Router>
      </div>
    )
  }
}

export default App;