import React, {Component} from "react";
import MessengerMainContainer from "components/Messengers/MessengerMainHandler";

// components
export default class Messenger extends Component {
    constructor(props) {
        super(props);
        this.user = props.session;
    }

    render() {
        return (
            <>
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <MessengerMainContainer session ={this.user}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
