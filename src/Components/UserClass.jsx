import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2,
    };
  }

  render() {
    const { count1, count2 } = this.state;
    const { name, location } = this.props;

    return (
      <div>
        <h1>
          count:{count1} {count2}
        </h1>
        <button onClick={()=>this.setState({count1:count1+1,count2:count2+1})}>click</button>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
      </div>
    );
  }
}
export default UserClass;
