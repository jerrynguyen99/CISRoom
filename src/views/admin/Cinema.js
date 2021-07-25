import React from "react";

import MessageList from "@chatscope/chat-ui-kit-react/dist/cjs/MessageList";
import { Loader } from "@chatscope/chat-ui-kit-react";
// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Cinema() {
  return (
    // <>
    //   <div className="flex flex-wrap">
    //     <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
    //       <CardLineChart />
    //     </div>
    //     <div className="w-full xl:w-4/12 px-4">
    //       <CardBarChart />
    //     </div>
    //   </div>
    //   <div className="flex flex-wrap mt-4">
    //     <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
    //       <CardPageVisits />
    //     </div>
    //     <div className="w-full xl:w-4/12 px-4">
    //       <CardSocialTraffic />
    //     </div>
    //   </div>
    // </>
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
                    Card Cinema is Under construction! Come back later
                </MessageList.Content>
            </MessageList>
    </>
  );
}
