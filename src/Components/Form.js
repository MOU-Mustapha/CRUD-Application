import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.addCourse} className="form" >
      <input type="text" onChange={props.currentValue} value={props.current} className="special" />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default Form;
