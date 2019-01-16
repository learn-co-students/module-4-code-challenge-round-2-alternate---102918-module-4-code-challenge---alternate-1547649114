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

  }



  componentDidMount(){
    fetch("http://localhost:3000/api/v1/users/1/courses")
    .then(res => res.json())
    .then(data =>
    this.setState({
      courses: data
    }))
  }



handleChange = (e, course) =>{
  console.log(e.target.value);
  let id = e.target.value
  this.setState({
    currentCourse: course,
  },this.fetchStudents(course))
}

fetchStudents (course){
  let id= course.id

  fetch(`http://localhost:3000/api/v1/users/1/courses/${id}`, {
  method: 'GET',
  headers:{
    'Content-Type': 'application/json'
  }
}). then(res => res.json())
.then(data =>
this.setState({
  students: data,
  studentExist: true
}))
}

handleEdit = obj =>{
  console.log("edit", obj);
}


  render() {



    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
        Course Title:
        {this.state.currentCourse.name}
        </div>

        <CourseSelector courses={this.state.courses} handleChange={this.handleChange}/>

        <EditStudent />

         {this.state.studentExist ? <StudentsList students={this.state.students}/> : null}
      </div>
    )
  }
}

export default CourseContainer
