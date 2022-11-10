// class component
// function component

import React from "react";

class MyComponent extends React.Component {

  state = {
    name: "Eric",
    address: "Hoi Dan IT",
    age: 26
  };
  handleClick(event){
    console.log("Clicked button");
    console.log("My name is ", this.state.name);
  
    // merge State (react class)
    this.setState({
      name: "Hary",
      age: Math.floor(Math.random() * 100) + 1
    })
    // this.setState({
    //   age: Math.floor(Math.random() * 100) + 1
    // })
  }

  // C1: Chuyen sang arrow function de this.state.name hoat dong
  // handleClick = (event) => {
  //   console.log("Clicked button");
  //   // console.log(event);
  //   console.log("My name is ", this.state.name);
  // }
  handleOnMouseOver(event){
    console.log(event.pageX);
  }
  render(){
    // JSX: chi tra ve 1 phan tu parent
    return(
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        {/* <button onClick={this.handleClick}>Click me</button> */}
        <button onClick={(event) => this.handleClick(event)}>Click me</button>
      </div>
    )
  }
}

export default MyComponent;