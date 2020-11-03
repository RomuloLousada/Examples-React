import React, { Component } from 'react'
import CounterCSS from './counter.module.css'

export default class Value extends Component {
    render() {
        return (
            <span className={CounterCSS.counterValue}>{this.props.value}</span>
        )
    }
}
