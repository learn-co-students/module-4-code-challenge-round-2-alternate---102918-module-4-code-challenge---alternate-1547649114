import React from "react";
import Student from "./Student";

const StudentsList = props => {
let list = props.students.students.map(student => <Student student={student} />);

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

        {list}
      </tbody>
    </table>
  );
};

export default StudentsList;
