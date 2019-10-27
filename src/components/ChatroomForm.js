import React, { Component } from "react";
import { url } from "../constants";
import * as request from "superagent";

export default class ChatroomForm extends Component {
  state = {
    message: ""
  };
  onChange = event => {
    console.log("onchange");
    this.setState({
      message: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("onSubmit of chatroomform");
    request
      .post(`${url}/message`)
      .send({ message: this.state.message })
      .catch(error => console.log("got an error!", error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="messageForm"
            type="text"
            onChange={this.onChange}
            value={this.state.message}
            placeholder="message here"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
