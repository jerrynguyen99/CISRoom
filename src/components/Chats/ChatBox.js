import React, { Component } from "react";
import { auth } from "../../services/firebase";
import { db } from "../../services/firebase";

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      messengers: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
    this.color = 'dark';
  }

  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;
    try {
      db.ref("messengers").on("value", snapshot => {
        let messengers = [];
        snapshot.forEach((snap) => {
          messengers.push(snap.val());
        });
        messengers.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ messengers });
        chatArea.scrollBy(0, chatArea.scrollHeight);
        this.setState({ loadingChats: false });
      });
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    if (this.state.content === '') {
      return
    }
    try {
      await db.ref("messengers").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid
      });
      this.setState({ content: '' });
      chatArea.scrollBy(0, chatArea.scrollHeight);
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  render() {
    return (
      <>
        <div className="py-5 mx-3">
          Login in as: <strong className="text-info">{this.state.user.email}</strong>
        </div>
        <div className="chat-area" ref={this.myRef}>
          {/* loading indicator */}
          {this.state.loadingChats ? <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div> : ""}
          {/* chat area */}
          {this.state.messengers.map(chat => {
            return <p key={chat.timestamp} className={"chat-bubble " + (this.state.user.uid === chat.uid ? "current-user" : "")}>
              {chat.content}
              <br />
              <span className="chat-time float-right">{this.formatTime(chat.timestamp)}</span>
            </p>
          })}
        </div>
        <form onSubmit={this.handleSubmit} className="mx-3">
          <div class="relative flex w-full flex-wrap items-stretch mt-3">
            <input type="text" placeholder="Regular Input" onChange={this.handleChange} value={this.state.content} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent text-base items-center justify-center w-8 right-0 pr-3 py-3">
              <i class="fas fa-paper-plane" onClick={this.handleSubmit}></i>
            </span>
          </div>
          {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
        </form>

      </>
    );
  }
}
