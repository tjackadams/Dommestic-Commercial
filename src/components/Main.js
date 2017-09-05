import React from "react";
import { Switch, Route } from "react-router-dom";

import Loadable from './MyLoadable';

import withTracker from './withTracker';
import Home from '../screens/Home';

let Contact = Loadable({
  loader: () => import(/* webpackChunkName: "Contact" */'../screens/Contact')
})

let Services = Loadable({
  loader: () => import(/* webpackChunkName: "Services" */'../screens/Services')
})

let ThankYou = Loadable({
  loader: () => import(/* webpackChunkName: "ThankYou" */'../screens/ThankYou')
})

class Main extends React.Component {

  componentDidMount(){
    Services.preload();
    Contact.preload();
  }
  
  render(){
    return (
      <main>
        <Switch>      
          <Route exact path="/" component={withTracker(Home)} />       
          <Route path="/Services" component={withTracker(Services)} />
          <Route path="/Contact" component={withTracker(Contact)} />
          <Route path='/ThankYou' component={withTracker(ThankYou)} />      
          <Route path="*" component={withTracker(Contact)} />        
        </Switch>
      </main>
    );
  }
};

export default Main;
