import React, { Component } from 'react';

export default class Color extends Component {
    constructor() {
        super()

        this.state = {
            color: "black",
            colorInput: "black"
        }

        this.updateColorInput = this.updateColorInput.bind(this)
        this.updateColor = this.updateColor.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateColorInput() {
        this.setState({ colorInput: event.target.value })
    }

    updateColor() {
        this.setState({ color: this.state.colorInput })
    }

    handleSubmit(event) {
        if (event.key === "Enter") {
            this.updateColor()
        }
    }

    render() {
        return (
            <div className="color-component">
                <h1 style={{ color: this.state.color }}>Color Me Sugaaa!</h1>
                <input 
                    type="text" 
                    value={this.state.colorInput} 
                    onChange={this.updateColorInput} 
                    onKeyPress={this.handleSubmit} />
                <button onClick={this.updateColor}>Submit</button>
            </div>
        )
    }
}