import React from "react";
import Student from "./Student";

const StudentsList = (props) => {

  return (

    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Student Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Class Year</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Course Percentage</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Edit</h3>
          </th>
        </tr>

        {props.students.map(student => <Student handleEdit={props.handleEdit} key={student.id} student={student}/>)}
      </tbody>
    </table>
  );
};

export default StudentsList;


// class_year: 11
// id: 1
// name: "Mr. Aletha Stroman"
// percentage: 86
