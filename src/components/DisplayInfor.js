import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowListUsers: true,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      document.title = "Hello";
    }, 3000);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log(prevProps);
    console.log(this.props);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("Done");
      }
    }
  }
  handleShowHide() {
    this.setState({
      isShowListUsers: !this.state.isShowListUsers,
    });
  }

  render() {
    console.log("render");
    const { listUsers } = this.props;
    return (
      <div className="display-infor-container">
        <img src={logo} />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUsers ? "Hide" : "Show"} list users
          </span>
        </div>
        {this.state.isShowListUsers && (
          <>
            {/* Dung map vi no return */}
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  {/* <div style={{ color: "yellow", paddingTop: "50px" }}> */}
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
