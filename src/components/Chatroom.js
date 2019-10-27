import React, { Component } from "react";
import { url } from "../constants";
import { connect } from "react-redux";
import {addMessages} from '../actions'
class Chatroom extends Component {
  state = {
    messages: []
  };

  source = new EventSource(`${url}/stream`);
  componentDidMount() {
    //console.log("component did mount of chatroom component");
    this.source.onmessage = event => {
      console.log("got a message.", event);
      const messages = JSON.parse(event.data);
      // this.setState({
      //   messages
      // });
      this.props.addMessages(messages)
    };
        //console.log("source", this.source);

  }
  render() {
    console.log("render of chatroom", this.props);
    if(!this.props.messages) return 'wait for messages'
    return (
      <div>
        Hello from chatroom component.
        <ul>
          {this.props.messages.map(message => (
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
    messages: reduxState.message,
    jeroen:  reduxState.message
  }
}
const mapDispatchToProps = {addMessages}
export default connect(mapStateToProps, mapDispatchToProps) (Chatroom)
