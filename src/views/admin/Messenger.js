import React from "react";

// components
import ChatBox from "components/Chats/ChatBox";
export default function Messenger() {
    return (
      <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
    );
}
