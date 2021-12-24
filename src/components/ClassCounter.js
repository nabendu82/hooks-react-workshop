import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    render() {
        return (
            <>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count - {this.state.count}</button>
            </>
        )
    }
}

export default ClassCounter
