import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MyNavLink from './../../../../browser-router/src/components/MyNavLink';
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>This is Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/about" />
          </Switch>
        </div>
      </div>
    );
  }
}
