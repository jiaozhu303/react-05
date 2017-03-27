import React, {Component, PropTypes} from 'react'
import Counter from './Counter';

export default class Page extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <Counter onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} value={this.props.value}>Hello
                World!</Counter>
        </div>);
    }
}