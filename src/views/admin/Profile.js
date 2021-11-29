import React, { Component } from "react";

// components

import Profile from "components/Profile/Profile";

export default class Tables extends Component {
  constructor(props){
    super(props)
    this.userProfile = props.profile;
    this.user = props.session;
    this.state = {
        color: 'lightBlue',
        isContinue: true,
    }
  }
  render() {

    return (
      <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Profile session={this.user} profile={this.userProfile}/>
        </div>
        <div className="w-full mb-12 px-4">
          <Profile color="dark" session={this.user} profile={this.userProfile}/>
        </div>
      </div>
    </>
  );
}
}
