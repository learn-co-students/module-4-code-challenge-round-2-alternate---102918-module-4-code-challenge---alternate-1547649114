import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

componentDidMount() {
  fetch('http://localhost:3000/api/v1/users/1/courses')
  .then(res => res.json())
  .then(json => this.setState({courses: json}))
}

handleTitle = (e) => {
  let id = e.target.value
  fetch(`http://localhost:3000/api/v1/users/1/courses/${id}`)
  .then(res=> res.json())
  .then(json => this.setState({currentCourse: json, students: json.students}))
}
handleEdit = (studentEdit) => {
  this.setState({currentStudent: studentEdit})
}

submitHandler = (student, id) => {
  // get the updated student and id and make a PATCH request
}
  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">

          Course Title
          {this.state.currentCourse.name}
        </div>

        <CourseSelector handleTitle={this.handleTitle} courseList={this.state.courses} />

        <EditStudent submitHandler={this.submitHandler} studentEdit={this.state.currentStudent}/>

        <StudentsList handleEdit={this.handleEdit} students={this.state.students}/>
      </div>
    )
  }
}

export default CourseContainer
