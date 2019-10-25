import React, {Component} from 'react'
export default class ChatroomForm extends Component {
  state={
    message:''
  }
  onChange=event=>{
    console.log('onchange')
    this.setState({
      message: event.target.value
    })
  }

  onSubmit=(event)=>{
    event.preventDefault()
    console.log('onSubmit of chatroomform')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
          name='messageForm'
          type='text'
          onChange={this.onChange}
          value={this.state.message}
          placeholder='message here'
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
