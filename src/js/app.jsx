import React from "react";
import ReactDOM from "react-dom";

// Component
class Counter extends React.Component {
    constructor () {
        super();
        this.state = {
            counter: 0
        }
    }

    render() {
        const { counter } = this.state;
        return <div>
            <h1>Counter: {counter}</h1>
            <button onClick={this.changeValue.bind(this, 'INCREMENT')}>Increment</button>
            <button onClick={this.changeValue.bind(this, 'DECRMENT')}>Decrement</button>
        </div>;
    }

    changeValue(action) {
        let currentValue = this.state.counter;
        const newValue = action === 'INCREMENT' ? currentValue + 1 : currentValue -1;
        this.setState({
            counter: (newValue >= 0 ? newValue : 0)
        });
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('content')
);
