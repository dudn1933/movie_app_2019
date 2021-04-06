import React, {Component} from "react";

export default class Food extends Component {
    state = {
        count : 0,
    }

    add = () => {this.setState(current => ({count: current.count+1}))}
    minus = () => {this.setState(current => ({count: current.count-1}))}

    render() {
        return (
            <div>
                <p>The number is {this.state.count}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}