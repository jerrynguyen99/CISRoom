import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Messenger from "views/admin/Messenger.js"

export default class Admin extends Component {
  
  render() {
    return (
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          {/* Header */}
          <AdminNavbar />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
        
              <Route path="/user/messenger" exact component={Messenger} />
              <Route path="/user/cinema" exact component={Dashboard} />
              <Route path="/user/maps" exact component={Maps} />
              <Route path="/user/tables" exact component={Tables} />
              <Route path="/user/settings" exact component={Settings} />
              <Redirect from="/user" to="/user/messenger" />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </>
    );
  }
}
