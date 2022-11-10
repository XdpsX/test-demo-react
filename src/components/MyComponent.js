// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  render(){
    // JSX: chi tra ve 1 phan tu parent
    return(
      <div>My first component
        {Math.random()}
      </div>
    )
  }
}

export default MyComponent;