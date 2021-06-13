import React, { Component } from "react";
import HeaderStats from "components/Headers/HeaderStats";

export default class CinemaNavbar extends Component {

    render() {
        return (
            <>  
                
                {this.props.button ? (<HeaderStats />) : (<div className="relative bg-lightBlue-600 md:pt-12 pb-32 pt-12"></div>)}
            </>
        )
    }
}