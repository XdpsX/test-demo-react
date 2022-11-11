import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  state = {
    isShowListUsers: true,
  };
  handleShowHide() {
    this.setState({
      isShowListUsers: !this.state.isShowListUsers,
    });
  }

  render() {
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
