import React, {Component} from "react"; 
import {
    Avatar, ChatContainer,
    ConversationHeader,
    InfoButton, Message, MessageInput,
    MessageList, MessageSeparator, TypingIndicator,
    VideoCallButton,
    VoiceCallButton
} from "@chatscope/chat-ui-kit-react";
export default class ChatContainerHandler extends Component {
    // messagesLoadingLimit = 20
    // messagesRef = collection('messages');
    // query = this.messagesRef.orderBy('createdAt').limit(this.messagesLoadingLimit);
    

    render() {
        return (
            <>
                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Back />
                        <Avatar src={this.randomUrl} name="Zoe" />
                        <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
                        <ConversationHeader.Actions>
                            <VoiceCallButton />
                            <VideoCallButton />
                            <InfoButton />
                        </ConversationHeader.Actions>
                    </ConversationHeader>

                    <MessageList typingIndicator={<TypingIndicator content="Eliot is typing" />}>

                        <MessageSeparator content="Saturday, 30 November 2019" />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "single"
                        }}>
                            <Avatar src={this.randomUrl} name="Eliot" />
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "outgoing",
                            position: "single"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer={true} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer={true} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer={true} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={this.randomUrl} name="Eliot" />
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "outgoing",
                            position: "first"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "outgoing",
                            position: "last"
                        }} />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer={true} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={this.randomUrl} name="Eliot" />
                        </Message>

                        <MessageSeparator content="Saturday, 31 November 2019" />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "single"
                        }}>
                            <Avatar src={this.randomUrl} name="Eliot" />
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "outgoing",
                            position: "single"
                        }} />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer={true} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer={true} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer={true} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={this.randomUrl} name="Eliot" />
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "outgoing",
                            position: "first"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "outgoing",
                            position: "last"
                        }} />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer={true} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Eliot",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={this.randomUrl} name="Eliot" />
                        </Message>
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </>
        )
    }
}