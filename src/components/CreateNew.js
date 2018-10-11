import React from 'react'
// import { Link, Redirect } from 'react-router-dom'
import { Form, Button, TextArea } from 'semantic-ui-react'

class CreateNew extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      author: '',
      info: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    })
    //Submit and reroute to root page
    this.props.notification(`Created a new anecdote: ${this.state.content}` )
    this.props.history.push('/')
  }

  render() {
    // return(
    //   <div>
    //     <h2>create a new anecdote</h2>
    //     <form onSubmit={this.handleSubmit}>
    //       <div>
    //         content
    //         <input name='content' value={this.state.content} onChange={this.handleChange} />
    //       </div>
    //       <div>
    //         author
    //         <input name='author' value={this.state.author} onChange={this.handleChange} />
    //       </div>
    //       <div>
    //         url for more info
    //         <input name='info' value={this.state.info} onChange={this.handleChange} />
    //       </div>
    //       <button>create</button>
    //     </form>
    //   </div>
    // )

    return(
      <Form onSubmit={this.handleSubmit}>
      <Form.Input name='content' control={TextArea} label='Content' placeholder='Type anecdote content here...' value={this.state.content} onChange={this.handleChange} />
        <Form.Input name='author' label='Author' value={this.state.author} onChange={this.handleChange} />
        <Form.Input name='info' label='URL to source' value={this.state.info} onChange={this.handleChange} />
        <Button type='submit'>Submit</Button>
      </Form>
    )

  }
}

export default CreateNew
