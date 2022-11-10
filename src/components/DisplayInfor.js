import React from "react";

class DisplayInfor extends React.Component {

  render(){
    const {age, name} = this.props;
    return(
      <div>
        <div>My name's {name}</div>
        <div>I'm {age}</div>
      </div>
    )
  }
  
}

export default DisplayInfor