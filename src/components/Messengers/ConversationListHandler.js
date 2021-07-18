import {Avatar, ConversationList} from "@chatscope/chat-ui-kit-react";
import {Conversation} from "@chatscope/chat-ui-kit-react";
import React, {Component} from "react";

export default class ConversationListHandler extends Component {
    render () {
        return (
                <ConversationList>
                    <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
                        <Avatar src={this.randomUrl} name="Lilly" status="available" />
                    </Conversation>

                    <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
                        <Avatar src={this.randomUrl} name="Joe" status="dnd" />
                    </Conversation>

                    <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you" unreadCnt={3}>
                        <Avatar src={this.randomUrl} name="Emily" status="available" />
                    </Conversation>

                    <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you" unreadDot>
                        <Avatar src={this.randomUrl} name="Kai" status="unavailable" />
                    </Conversation>

                    <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
                        <Avatar src={this.randomUrl} name="Akane" status="eager" />
                    </Conversation>

                    <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
                        <Avatar src={this.randomUrl} name="Eliot" status="away" />
                    </Conversation>

                    <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
                        <Avatar src={this.randomUrl} name="Zoe" status="dnd" />
                    </Conversation>

                    <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
                        <Avatar src={this.randomUrl} name="Patrik" status="invisible" />
                    </Conversation>
                </ConversationList>
        )
    }
}