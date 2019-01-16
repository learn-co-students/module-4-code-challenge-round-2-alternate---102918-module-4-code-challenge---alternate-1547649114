import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: [],
    editStudents: []
  }

  componentDidMount(){
    fetch("http://localhost:3003/api/v1/users/1/courses")
    .then(res=>res.json())
    .then(courses=>{
      this.setState({
        courses: courses
      })
    })
  }

  componentDidMount(){
    fetch("http://localhost:3003/api/v1/users/1/students")
    .then(res=>res.json())
    .then(students=>{
      this.setState({
        students: students,
        editStudents: students
      })
    })
  }



  editStudent=(e,student)=>{
    e.preventDefault()
    let newArr=[...this.state.editStudents].filter(editKid=>{
      return editKid === student
    })
    this.setState({
      students: newArr
    })
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {}
          Course Title
        </div>

        <CourseSelector courses={this.state.courses}/>

        <EditStudent editStudent={this.editStudent}/>

        <StudentsList students={this.state.students}/>
      </div>
    )
  }
}

export default CourseContainer
