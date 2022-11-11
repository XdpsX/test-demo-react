// class component
// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi Dan IT", age: "16" },
      { id: 2, name: "Eric", age: "26" },
      { id: 3, name: "HaryPhamDev", age: "40" },
    ],
  };

  // handleClick(event){
  //   console.log("Clicked button");
  //   console.log("My name is ", this.state.name);

  //   // merge State (react class)
  //   this.setState({
  //     name: "Hary",
  //     age: Math.floor(Math.random() * 100) + 1
  //   })
  //   // this.setState({
  //   //   age: Math.floor(Math.random() * 100) + 1
  //   // })
  // }

  // C1: Chuyen sang arrow function de this.state.name hoat dong
  // handleClick = (event) => {
  //   console.log("Clicked button");
  //   // console.log(event);
  //   console.log("My name is ", this.state.name);
  // }
  handleOnMouseOver(event) {
    console.log(event.pageX);
  }

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });

    // let listUsersNew = this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // this.setState({
    //   listUsers: listUsersNew,
    // });
  };
  handleDeleteUser = (userId) => {
    let listUserClone = this.state.listUsers.slice();
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUserClone,
    });
  };
  render() {
    const test = { name: "eric", age: 45 };
    // JSX: chi tra ve 1 phan tu parent
    return (
      <>
        <br />
        {JSON.stringify(test)}
        <br />
        <div className="a">
          {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button> */}
          {/* <button onClick={this.handleClick}>Click me</button> */}
          <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
          <br />
          <br />
          <DisplayInfor
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;

// Cap nhat props, state -> tu dong goi render
