import React, { Component } from "react";

// components
import CardGames from "components/Cards/CardGame";
import firebase from "firebase/app";

export default class Game extends Component {

    constructor(props) {
        super(props)
        this.user = props.session;
        this.state = {
            color: 'lightBlue',
            isContinue: true,
        }
    }

    updateState(data) {
        this.setState({
            credit: data,
            iscontinue: true,
        });
        console.log(this.state.isContinue);

    }
    getCredit(uid) {
        var creditPlayerRef = firebase.database().ref('gaming/' + uid + '/credits');
        creditPlayerRef.on('value', (snapshot) => {
            const data = snapshot.val();
            this.updateState(data);
        })
    }

    componentDidMount() {
        this.getCredit(this.user.getUID());
    }

    render() {
        return (
            this.state.isContinue ?
                <>
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                            <CardGames playerName={this.user.getDisplayName()} playerCredit={this.state.credit} />
                        </div>
                    </div>
                </>
                : <> <p> đang tải game đợi xíu </p></>
        );
    }

}
