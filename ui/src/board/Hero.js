import React, {Component} from 'react';
import Card from "../card/Card"

export default class Hero extends Component {
    render() {
        return (
            <Card image={this.props.image} onClick={() => console.log("Add click handler to card")}/>
        );
    }
}