import React, { Component } from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";


export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.userProfile = props.profile; 
    console.log(this.userProfile);
  }
  render () {
    return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
    )
  }
}

