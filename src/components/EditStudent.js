import React, { Component } from 'react';

class EditStudent extends Component {

  render() {
    return (
      <form
        className="ui form center aligned sixteen wide column"
        onSubmit={this.props.handleEditSubmit}
      >
        <div className="inline fields">
          <div className="four wide field">
            <input
              id="name"
              type="text"
              value={this.props.student.name}
              onChange={this.props.handleEditChange}
            />
          </div>
          <div className="four wide field">
            <input
              id="class_year"
              type="number"
              value={this.props.student.class_year}
              onChange={this.props.handleEditChange}
            />
          </div>
          <div className="four wide field">
            <input
              id="percentage"
              type="number"
              value={this.props.student.percentage}
              onChange={this.props.handleEditChange}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }

}

export default EditStudent;
