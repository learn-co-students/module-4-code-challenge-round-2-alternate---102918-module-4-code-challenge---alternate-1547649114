import React from 'react'

const Student = (props) => {

  return (
    <tr>
      <td>{props.student.name}</td>
      <td>{props.student.class_year}</td>
      <td>{props.student.percentage}</td>
      <td>
        <button onClick={()=>props.showStudentValue(props.student)}className="ui button left">
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
