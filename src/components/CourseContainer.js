import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: null,
    currentStudent: {},
    courses: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users/1/courses')
    .then(res => res.json())
    .then(courses => this.setState({ courses }))
  }

  handleEdit =(student)=> {
    this.setState({currentStudent:student})

  }

  handleEditChange=()=>{
    this.setState
  }

  handleOnChange =(course)=> {
    console.log(course)
    fetch(`http://localhost:3000/api/v1/users/1/courses/${course}`)
    .then(res => res.json())
    .then(currentCourse => this.setState({
      currentCourse: currentCourse,
      students: currentCourse.students

    }))



  }


  render() {
    console.log("checking students",this.state.students)

    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
              <br></br>
        {this.state.currentCourse
          ? this.state.currentCourse.name
          : "Course Title"}
        </div>

        <CourseSelector courses={this.state.courses}
        handleOnChange={this.handleOnChange}
        />

        <EditStudent student={this.state.currentStudent}/>

        <StudentsList students={this.state.students}
        handleEdit={this.handleEdit}/>


      </div>
    )
  }
}

export default CourseContainer
