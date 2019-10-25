import React, { Component } from "react";
import { url } from "../constants";
import {} from 'react-redux'
import { connect } from "react-redux";
import {addMessages} from '../actions'
class Chatroom extends Component {
  state = {
    messages: []
  };

  source = new EventSource(`${url}/stream`);
  componentDidMount() {
    console.log("componentDidMount chatroom component");
    this.source.onmessage = event => {
      console.log("got a message.", event);
      const messages = JSON.parse(event.data);
      this.setState({
        messages
      });
      this.props.addMessages(messages)
    };
    console.log("url is ", url);
    console.log();
  }
  render() {
    console.log("local.state: ", this.state);
    if(!this.props.messages) return 'wait for messages'
    return (
      <div>
        Hello from chatroom component.
        <ul>
          {this.state.messages.map(message => (
            <li key={message.id} >  {message.message}</li>
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(reduxState){
  console.log('mstp of chatroom component', reduxState)
  return {
    messages: reduxState.message
  }
}
const mapDispatchToProps = {addMessages}
export default connect(mapStateToProps, mapDispatchToProps) (Chatroom)
