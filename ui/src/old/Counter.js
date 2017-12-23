import React, {Component} from 'react';
import CounterCss from "./Counter.css"

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 20};
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        this.setState({counter: this.state.counter + 1});
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <h2 className={CounterCss.test}>Counter: {this.state.counter}</h2>;
    }
}
