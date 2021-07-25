import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Index from "views/Index.js";

import { auth } from "services/firebase";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/auth/login", state: { from: props.location } }}
                    />
                )
            }
        />
    );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authenticated === false ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/user" />
                )
            }
        />
    );
}


class App extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            loading: true
        };
    }
    componentDidMount() {
        auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false
                });
            }
        });
    }


    render() {
        return this.state.loading === true ? (
            <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        ) : (
            <Router>
                <Switch>
                    {/* add routes with layouts */}
                    <PrivateRoute
                        path="/user"
                        authenticated={this.state.authenticated}
                        component={Admin}
                    />
                    <PublicRoute
                        path="/auth/login"
                        authenticated={this.state.authenticated}
                        component={Auth}
                    />
                    {/* add routes without layouts */}
                    <PublicRoute
                        path="/landing"
                        exact
                        component={Landing}
                    />
                    <Route
                        path="/"
                        exact
                        component={Index}
                    />
                    {/* add redirect for first page */}
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        );
    }
}

export default App;