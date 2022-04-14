import React, { Component } from "react";
import "./styles.css";

export class App extends Component {
    state = { isActive: false };

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };

    render() {
        const isActive = this.state.isActive;
        return (
            <div className={isActive ? "app" : null}>
                <h1>Hello react</h1>
                <button onClick={this.handleToggle}>Toggle class</button>
            </div>
        );
    }
}
