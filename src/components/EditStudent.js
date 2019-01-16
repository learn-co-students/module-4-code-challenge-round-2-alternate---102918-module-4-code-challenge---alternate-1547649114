import React from 'react'

class EditStudent extends React.Component {

state = {
  name: '',
  class_year: '',
  percentage: ''
}


handleChange = (e) => {
  this.setState({[e.target.id]: e.target.value})
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.submitHandler(this.state, this.props.student.id)
  this.setState({
    name: '',
    class_year: '',
    percentage: ''
  })
}

  render () {
    return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={this.handleSubmit}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            value={this.state.name}
            id="name"
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="four wide field">
          <input
          value={this.state.class_year}
            id="class_year"
            type="number"
            onChange={this.handleChange}
          />
        </div>
        <div className="four wide field">
          <input
          value={this.state.percentage}
            id="percentage"
            type="number"
            onChange={this.handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}
}
export default EditStudent
