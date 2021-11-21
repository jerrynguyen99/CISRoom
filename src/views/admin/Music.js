import React, { Component } from "react";

// components

import CardMusic from "components/Cards/CardMusic";

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.viewMode = props.viewMode
  }
  render() {
    return (
      <>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <CardMusic color={this.viewMode} />
          </div>
        </div>
      </>
    );
  }

}
