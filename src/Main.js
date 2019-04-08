import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Men from './men/Men'
import Women from './women/Women'
import Kids from './kids/Kids'
import Credits from './credits/Credits'

class Main extends Component {
  render() {
    return (<main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/men' component={Men}/>
        <Route path='/women' component={Women}/>
        <Route path='/kids' component={Kids}/>
        <Route path='/credits' component={Credits}/>
      </Switch>
    </main>);
  }
}

export default Main;
