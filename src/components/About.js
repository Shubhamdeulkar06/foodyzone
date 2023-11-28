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
      <div className="m-4">
        <h1>Hello, Welcome</h1>
        <div className="flex justify-center">
          <UserClass name={"shubham from class"} location={"Goa"} />
        </div>
      </div>
    );
  }
}
export default About;
