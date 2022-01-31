import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";

import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import CinemaNavbar from "components/Navbars/CinemaNavbar";

import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Messenger from "views/admin/Messenger.js"
import Connection from "views/admin/Connection";
import Profile from "views/admin/Profile";
import { getProfile, logout, UserSession } from "../helpers/auth";
import Music from "views/admin/Music";
import Cinema from "views/admin/Cinema";
import Game from "views/admin/Game";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.userSession = new UserSession();
    this.state = {
      profile: 'nan',
      buttonClick: false,
      colorViewMode: 'light',
      loading: true
    }
  }

  componentDidMount() {
    getProfile().then((data) => { this.setState({ profile: data, loading: false }) })
  }

  hideCalendar(status) {
    this.setState({ buttonClick: status })
  }

  changeViewMode(mode) {
    this.setState({ colorViewMode: mode })
  }

  render() {
    return this.state.loading === true ? (<h1> Đây là một cái loading cute </h1>) : (
      <>
        <Sidebar button={this.state.buttonClick} hideCalendar={this.hideCalendar.bind(this)}
          viewMode={this.state.colorViewMode} changeViewMode={this.changeViewMode.bind(this)}
        />
        <div className="relative md:ml-20 bg-blueGray-100">
          {/* Header */}
          {/* <AdminNavbar /> */}
          <CinemaNavbar button={this.state.buttonClick} />
          <div className="px-4 mx-auto w-full p-8 pt-24 -m-20">
            {/* <p>Debug command Darkmode: {this.state.colorViewMode}</p> */}
            <Switch>

              <Route path="/u/messenger" exact component={() => <Messenger session={this.userSession} />} />
              <Route path="/u/connection" exact component={() => <Connection viewMode={this.setState.colorViewMode} />} />
              <Route path="/u/profile" exact component={() => <Profile profile={this.state.profile} session={this.userSession} />} />
              <Route path="/u/cinema" exact component={Cinema} />
              <Route path="/u/gaming" exact component={() => <Game profile={this.state.profile} session={this.userSession} />} />
              <Route path="/u/maps" exact component={Maps} />
              <Route path="/u/music" exact component={Music} />
              <Route path="/u/settings" exact component={() => <Settings profile={this.state.profile} session={this.userSession} />} />
              <Route path="/u/logout" exact component={() => <div onLoad={logout()}>  </div>}> </Route>
              <Redirect from="/u" to="/u/messenger" />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </>
    );
  }
}
