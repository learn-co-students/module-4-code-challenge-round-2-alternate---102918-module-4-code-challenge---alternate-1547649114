import React from "react";

export default class CourseSelector extends React.Component {

  render(){
  return (
    <div>


    <div className="sixteen wide column">

        {/* Pass through a list of courses and map through it below to generate the individual options in your dropdown. */}
        {this.props.courses.map((course, i) => {
          return(
            <select className="ui dropdown" onClick={e=>this.props.handleChange(e, course)} >
            <option key={i} className="item" value={course.id}>
              {course.name}
            </option>

            </select>
          )
        })}



    </div>
    </div>
  );
};
}
