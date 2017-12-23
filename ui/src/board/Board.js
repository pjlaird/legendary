import React, {Component} from 'react';
import Css from "./Board.css";
import Card from "../card/Card";
import Headquarters from "./Headquarters";
import VillainLocations from "./City";

import webstomp from 'webstomp-client';

export default class Board extends Component {
    onConnect = (args) => {
        console.log("Connected");
        console.log(args);
        this.state.stompClient.subscribe('/topic/public', this.onMessageReceived);
    };
    onError = (args) => {
        console.log("Error");
        console.log(args);
    };
    onMessageReceived = (payload) => {
        console.log(payload.body);
    };

    constructor(props) {
        super(props);
        this.state = {
            scheme: "Scheme",
            mastermind: "mastermind",

            villainsRemaining: 30,
            heroesRemaining: 50,
            escapedVillains: 0,


            villain: "Villain Deck",

            wounds: "Wounds",
            bystanders: "Bystanders",

            shield: "S.H.I.E.L.D",
            hero: "Hero",
            hq: Array(5).fill(null),
            stompClient: null
        }
    }

    componentDidMount() {
        this.state.stompClient = webstomp.client("ws://localhost:8080/ws");
        this.state.stompClient.connect({}, this.onConnect, this.onError);
    }

    componentWillUnmount() {
        this.state.stompClient.unsubscribe('/topic/public')
    }

    render() {
        return (
            <div className={Css.board}>
                <div style={{display: "flex"}}>
                    <div>
                        <div onClick={() => this.onVillainEscaped()}>Escaped
                            Villains: {this.state.escapedVillains}</div>
                        <div>Villains Remaining: {this.state.villainsRemaining}</div>
                        <div>Heroes Remaining: {this.state.heroesRemaining}</div>
                    </div>
                </div>
                <div style={{display: "flex", alignItems: "flex-end"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <div>Mastermind</div>
                        <Card image={`http://localhost:8080/villain/mastermind.png`}/>
                        <div>S.H.I.E.L.D</div>
                        <Card image={`http://localhost:8080/hero/shield.png`}/>
                    </div>
                    <div>
                        <VillainLocations/>
                        <Headquarters/>
                    </div>
                </div>
            </div>
        );
    }

    onVillainEscaped() {
        this.setState({escapedVillains: this.state.escapedVillains + 1});
        this.state.stompClient.send("/app/chat.sendMessage", JSON.stringify({
            message: `A message ${this.state.escapedVillains}`
        }), {})
    }
}
