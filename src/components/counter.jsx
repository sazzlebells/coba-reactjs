import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // imgUrl: 'https://picsum.photos/200'
    tags: ["tag1", "tag2", "tag3"],
  };

  style = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this) //binding event handler cuz event cant access 'this'
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={(product) => this.handleIncrement(product)}
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
  }

  formatCount() {
    const { value: value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
