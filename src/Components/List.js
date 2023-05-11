import React, { Component, Fragment } from "react";

class List extends Component {
  state = {
    isEdit: false,
  };
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={() => this.toggleState()}>Edit Course</button>
        <button onClick={() => this.props.deleteCourse(this.props.index)}>
          Delete Course
        </button>
      </li>
    );
  };
  renderUpdate = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(v) => (this.input = v)}
          defaultValue={this.props.details.name}
        />
        <button>Update Course</button>
      </form>
    );
  };
  toggleState = () => {
    let isEdit = this.state.isEdit;
    this.setState({
      isEdit: !isEdit,
    });
  };
  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.input.value, this.props.index);
    this.toggleState();
  };
  render() {
    const isEdit = this.state.isEdit;
    return (
      <Fragment>{isEdit ? this.renderUpdate() : this.renderCourse()}</Fragment>
    );
  }
}

export default List;
