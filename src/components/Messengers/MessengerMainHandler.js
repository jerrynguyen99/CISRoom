import React, {Component} from "react";
import {MainContainer} from '@chatscope/chat-ui-kit-react';
import InfoSidebar from "./InfoSidebar";
import UtilitiesSideBar from "./UtilitiesSideBar";
import ChatContainerHandler from "./ChatContainerHandler";


export default class MessengerMainContainer extends Component {
    constructor(props) {
        super(props);
        this.user = props.session;
    }

    render() {
        return (
            <>
                <div style={{
                    height: "600px",
                    position: "relative"
                }}>
                    <MainContainer responsive>
                        <InfoSidebar session={this.user} />

                        <ChatContainerHandler session={this.user}/>
                        <UtilitiesSideBar session={this.user}/>
                    </MainContainer>
                    {this.message}
                </div>
            </>
        );
    }
}
