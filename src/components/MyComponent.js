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
    // console.log(event);
    console.log("My name is ", this.state.name);
  }
  handleOnMouseOver(event){
    console.log(event.pageX);
  }
  render(){
    // JSX: chi tra ve 1 phan tu parent
    return(
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default MyComponent;