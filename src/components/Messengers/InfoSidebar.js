import React, {Component} from "react";
import {Search, Sidebar} from "@chatscope/chat-ui-kit-react";
import ConversationListHandler from "./ConversationListHandler";

export default class InfoSidebar extends Component {
    constructor(props) {
        super(props);
        this.user = props.session;
    }

    render() {
        return (
            <>

                <Sidebar position="left" scrollable={true}>
                    <Search placeholder="Search..."/>
                    <ConversationListHandler />
                </Sidebar>
            </>
        )

    }

}