import React, {Component} from 'react';
import Hero from "./Hero";
import Css from "./Headquarters.css";

export default class Headquarters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [
                "gambit",
                "wolverine",
                "storm",
                "cyclops",
                "gambit"
            ]
        }
    }

    render() {
        return (
            <div className={Css.headQuarters}>
                {this.state.heroes.map((hero, index) => <Hero key={index}
                                                              image={`http://localhost:8080/hero/${hero}.png`}/>)}
            </div>
        );
    }
}
