import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        // imgUrl: 'https://picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
    };

    style = {
        fontSize: 20,
        fontWeight: "bold",
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this) //binding event handler cuz event cant access 'this'
    // }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {

        return (
            <React.Fragment>
                {/* <img src={this.state.imgUrl} alt="" /> */}
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} style={{ fontSize: 15 }} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
