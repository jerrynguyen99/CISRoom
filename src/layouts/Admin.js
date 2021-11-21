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
import { getProfile, UserSession } from "../helpers/auth";
import Music from "views/admin/Music";
import Cinema from "views/admin/Cinema";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.userSession = new UserSession();
    this.state = {
      profile: '',
      buttonClick: false,
      colorViewMode: 'light',
      loading: true
    }
  }

  componentDidMount() {
    getProfile().then((data) => {this.setState({ profile: data, loading: false })})
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

              <Route path="/user/messenger" exact component={() => <Messenger session={this.userSession} />} />
              <Route path="/user/connection" exact component={() => <Connection viewMode={this.setState.colorViewMode} />} />
              <Route path="/user/profile" exact component={() => <Profile session={this.userSession} />} />
              <Route path="/user/cinema" exact component={Cinema} />
              <Route path="/user/maps" exact component={Maps} />
              <Route path="/user/music" exact component={Music} />
              <Route path="/user/settings" exact component={() => <Settings profile={this.state.profile} session={this.userSession} />} />

              <Redirect from="/user" to="/user/profile" />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </>
    );
  }
}
