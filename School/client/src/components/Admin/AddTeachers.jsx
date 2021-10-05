import React, { Component } from "react";
import axios from "axios";

class AddTeachers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      imageUrl: "",
      field: "",
      age: 0,
      teacher: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    const nam = event.target.name;
    const value = event.target.value;

    this.setState({
      [nam]: value,
      teacher: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        imageUrl: this.state.imageUrl,
        field: this.state.field,
        age: Number(this.state.age),
      },
    });
  }

  createTeacher() {
    axios
      .post("", this.state.teacher)
      .then((teacher) => {
        console.log(teacher);
        console.log("teacher created");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="create">
        <div className="create-editor">
          <h2>Create teacher</h2>
          <div className="create-teacher-inputs">
            <input
              name="firstName"
              className="create-body-textarea"
              type="text"
              placeholder="First Name"
              onChange={this.handleChange}
            ></input>
            <input
              name="lastName"
              className="create-body-textarea"
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange}
            ></input>
            <input
              name="imageUrl"
              className="create-body-textarea"
              type="text"
              placeholder="Teacher image"
              onChange={this.handleChange}
            ></input>
            <input
              name="field"
              className="create-body-textarea"
              placeholder="Teacher field"
              type="text"
              onChange={this.handleChange}
            ></input>
            <input
              name="age"
              className="create-body-textarea"
              placeholder="Teacher age"
              type="text"
              onChange={this.handleChange}
            ></input>
            <input
              className="create-body-textarea"
              name="email"
              type="text"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <input
              className="create-body-textarea"
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />

            <br></br>
            <br></br>

            <button
              onClick={this.createTeacher.bind(this)}
              className="create-submit-button-add-teacher"
              type="submit"
            >
              Save teacher
            </button>

            <br></br>
            <br></br>

            <button onClick={() => this.props.changeView("adminFeed")}>
              {" "}
              back to feed{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddTeachers;
