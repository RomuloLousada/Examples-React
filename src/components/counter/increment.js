import React, { Component } from 'react'

export default class Increment extends Component {
    handleClick = () => {
        this.props.onIncrement(1);
    }

    render() {
        return (
            <button onClick={this.handleClick}>+</button>
        )
    }
}
