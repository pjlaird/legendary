import React, {Component} from 'react';
import Card from "../card/Card";
import Css from "./City.css";

export default class VillainLocations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            villains: [
                "sentinel",
                "skrull",
                "sabretooth",
                "ultron",
                "skrull"
            ]
        }
    }

    render() {
        return (
            <div className={Css.headQuarters}>
                <div>
                    <Card image={`http://localhost:8080/villain/${this.state.villains[0]}.png`}/>
                    <div>Bridge</div>
                </div>
                <div>
                    <Card image={`http://localhost:8080/villain/${this.state.villains[1]}.png`}/>
                    <div>Streets</div>
                </div>
                <div><Card image={`http://localhost:8080/villain/${this.state.villains[2]}.png`}/>

                    <div>Rooftops</div>
                </div>
                <div>
                    <Card image={`http://localhost:8080/villain/${this.state.villains[3]}.png`}/>
                    <div>Bank</div>
                </div>
                <div>
                    <Card image={`http://localhost:8080/villain/${this.state.villains[4]}.png`}/>
                    <div>Sewers</div>
                </div>
            </div>
        );
    }
}
