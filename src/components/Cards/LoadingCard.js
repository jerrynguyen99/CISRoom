import React from "react";
import {Loader, MessageList} from "@chatscope/chat-ui-kit-react";

// components
export default function LoadingCard(){


    return (
        <>
            <MessageList>
                <MessageList.Content style={{
                    display: "flex",
                    "flexDirection": "column",
                    "justifyContent": "center",
                    height: "100%",
                    textAlign: "center",
                    fontSize: "1.2em"
                }}>
                    <Loader variant="default"> </Loader>
                    Loading
                </MessageList.Content>
            </MessageList>
        </>
        )

}
