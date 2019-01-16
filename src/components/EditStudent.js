import React from 'react'

export default class EditStudent extends React.Component {
  state={
    name: "",
    class:"",
    percentage: ""
  }


 handleChange = e =>{
   this.setState({
     [e.target.name]: e.target.value
   })
 }

render(){
  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={e=>this.props.handleEdit(e, this.state)}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            value= {this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            value= {this.state.class_year}
              onChange={this.handleChange}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            value= {this.state.percentage}
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
