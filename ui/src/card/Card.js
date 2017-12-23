import React, {Component} from 'react';

import Css from "./Card.css";

export default class Card extends Component {
    render() {
        return (
            <div className={Css.card} style={{backgroundImage: `url(${this.props.image})`}}
                 onClick={this.props.onClick}>
            </div>
        );
    }
}
