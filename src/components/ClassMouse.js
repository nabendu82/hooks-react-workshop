import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove)
    }
    
    render() {
        return (
            <h2>
                X - {this.state.x}, Y - {this.state.y}
            </h2>
        )
    }
}

export default ClassMouse
