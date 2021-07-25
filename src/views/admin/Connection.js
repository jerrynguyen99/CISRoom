import React, { Component } from "react";

// components

import CardConnection from "components/Cards/CardConnection";

export default class Connection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <CardConnection color={this.props.viewMode} />
          </div>
        </div>
      </>
    );
  }

}
