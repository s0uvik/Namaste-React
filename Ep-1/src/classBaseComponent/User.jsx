import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        login: "",
        avatar_url: "",
      },
    };
    console.log("constructor")
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/s0uvik");
    const data = await res.json();

    this.setState({
      userInfo: data,
    });
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    
    console.log("render")
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <div>
          <h1>Name: {name}</h1>
          <h3>Location: {location}</h3>
          <h3>User name: {login}</h3>
        </div>
      </div>
    );
  }
}

export default User;
