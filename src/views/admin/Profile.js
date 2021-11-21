import React, { Component } from "react";

// components

import Profile from "components/Profile/Profile";

export default class Tables extends Component {
  constructor(props){
    super(props);
    this.user = props.session;
  }
  render() {

    return (
      <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Profile session={this.user} />
        </div>
        <div className="w-full mb-12 px-4">
          <Profile color="dark" session={this.user} />
        </div>
      </div>
    </>
  );
}
}
