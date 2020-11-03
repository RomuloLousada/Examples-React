import React, { Component } from 'react'

export default class Decrement extends Component {
    handleClick = () => {
        this.props.onDecrement(-1);
    }

    render() {
        return (
            <button onClick={this.handleClick}>-</button>
        )
    }
}
