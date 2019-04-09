import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import MenTops from './men/MenTops'
import MenUT from './men/MenUT'
import MenBottoms from './men/MenBottoms'
import MenActiveWear from './men/MenActiveWear'
import MenInnerWear from './men/MenInnerwear'
import WomenTops from './women/WomenTops'
import WomenUT from './women/WomenUT'
import WomenBottoms from './women/WomenBottoms'
import WomenActiveWear from './women/WomenActiveWear'
import WomenInnerWear from './women/WomenInnerwear'
import Kids from './kids/Kids'
import Credits from './credits/Credits'


class Main extends Component {
  render() {
    return (<main>
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* Men */}
        <Route path='/men/tops' component={MenTops}/>
        <Route path='/men/ut' component={MenUT}/>
        <Route path='/men/active-wear' component={MenActiveWear}/>
        <Route path='/men/pants' component={MenBottoms}/>
        <Route path='/men/inner-wear' component={MenInnerWear}/>
        {/* Women */}
        <Route path='/women/tops' component={WomenTops}/>
        <Route path='/women/ut' component={WomenUT}/>
        <Route path='/women/active-wear' component={WomenActiveWear}/>
        <Route path='/women/pants' component={WomenBottoms}/>
        <Route path='/women/inner-wear' component={WomenInnerWear}/>

        <Route path='/kids' component={Kids}/>
        <Route path='/credits' component={Credits}/>
      </Switch>
    </main>);
  }
}

export default Main;
