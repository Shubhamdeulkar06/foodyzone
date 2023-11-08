import React from "react";

import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent cunstructor");
  }
  componentDidMount() {
    // console.log("Parent did mount");
  }
  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>This is the about page</h1>
        <div className="user-card-container">
          <UserClass name={"shubham from class"} location={"Goa"} />
        </div>
      </div>
    );
  }
}
export default About;
