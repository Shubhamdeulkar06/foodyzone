import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Shubhamdeulkar06");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, id, avatar_url } = this.state.userInfo;

    return (
      <div className="bg-gray-300 flex flex-col p-2">
        <img
          className="rounded-lg h-[70%]"
          src={avatar_url}
          alt="profile photo"
        />
        <h2>Name : {name}</h2>
        <h3>Id : {id}</h3>
        <h4>Contact : Shubham@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
