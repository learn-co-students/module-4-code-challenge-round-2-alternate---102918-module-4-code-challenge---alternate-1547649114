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

  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {/* Course Title Here */}
          Course Title
        </div>

        <CourseSelector />

        <EditStudent />

        <StudentsList />
      </div>
    )
  }
}

export default CourseContainer
