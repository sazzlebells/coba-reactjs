import React, { Component } from "react";

class Counter extends Component {
  style = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this) //binding event handler cuz event cant access 'this'
  // }

  onDelete = () => {};

  render() {
    return (
      <React.Fragment>
        <br />
        {/* <h4>{this.props.id}</h4> */}
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
