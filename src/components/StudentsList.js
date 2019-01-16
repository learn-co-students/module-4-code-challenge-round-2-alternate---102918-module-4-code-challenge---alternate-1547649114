import React from "react";
import Student from "./Student";

const StudentsList = (props) => {
  console.log(props.handleEdit)
  let list = props.students.map(student =>
    <tr>
    <td>{student.name}</td>
    <td>{student.class_year}</td>
    <td>{student.percentage}</td>
    <td> <button onClick={() => props.handleEdit(student)}>Edit Me</button> </td>
    </tr>
  )
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Student Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Student Class Year</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Student Percentage</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Edit</h3>
          </th>
        </tr>

          {list}
      </tbody>
    </table>
  );
};

export default StudentsList;
