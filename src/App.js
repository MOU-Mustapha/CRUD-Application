import React, { Component } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    current: "",
  };
  currentValue = (e) => {
    this.setState({
      current: e.target.value,
    });
  };
  addCourse = (e) => {
    e.preventDefault();
    if (this.state.current !== "") {
      let current = this.state.current;
      let courses = this.state.courses;
      courses.push({ name: current });
      this.setState({
        courses,
        current: "",
      });
    } else if (this.state.current === "") {
      window.alert("Please Enter Course Name");
    }
  };
  deleteCourse = (index) => {
    const courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({ courses });
  };
  editCourse = (newVal, index) => {
    let courses = this.state.courses;
    let course = courses[index];
    course.name = newVal;
    this.setState({ courses });
  };
  render() {
    const courses = this.state.courses;
    const length = courses.length;
    const courseList = courses.map((course, index) => {
      return (
        <List
          details={course}
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
          length={length}
        />
      );
    });
    return (
      <div className="app">
        <h2>Add Courses</h2>
        <Form
          currentValue={this.currentValue}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        {this.state.courses.length ? (
          <ul>{courseList}</ul>
        ) : (
          <p className="para">There Is No Courses To Show</p>
        )}
      </div>
    );
  }
}

export default App;
