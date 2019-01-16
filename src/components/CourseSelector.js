import React from "react";

const CourseSelector = (props) => {

  let courseList = props.courses.map(course=>{
    return course={course}
  })
  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={()=> console.log('handle change')} >
        {courseList}
        {courseList.map((course, i) => {
          return (
            <option key={i} className="item" value={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CourseSelector;
