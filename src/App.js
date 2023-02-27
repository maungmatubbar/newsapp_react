import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
            <Switch>
              <Route exact path="/"><News key="general" pageSize={9} category="general" /></Route>
              <Route exact path="/business"><News key="business" pageSize={9} category="business" /></Route>
              <Route exact path="/entertainment"><News key="entertainment" pageSize={9} category="entertainment" /></Route>
              <Route exact path="/general"><News key="general" pageSize={9} category="general" /></Route>
              <Route exact path="/health"><News key="health" pageSize={9} category="health" /></Route>
              <Route exact path="/science"><News key="science" pageSize={9} category="science" /></Route>
              <Route exact path="/sports"><News key="sports" pageSize={9} category="sports" /></Route>
              <Route exact path="/technology"><News key="technology" pageSize={9} category="technology" /></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
