import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../../containers/Navbar/index";
import "./index.css";

class EndTurnLayout extends Component {
	state = {};

	onPressButton = e => {};

	render() {
		var component;
		switch (this.props.situation) {
			case "loseALife":
				component = <p>You lost a life.</p>;
				break;
			case "noLife":
				component = (
					<p>
						You have no more life. Your bot will rest for the next turn to
						regain a life.
					</p>
				);
				break;
			default:
				component = <p>Your turn is finish.</p>;
				break;
		}
		const { players, currentPlayer } = this.props.playersInfo;
		console.log(players);
		return (
			<div>
				<Navbar />
				<div className="container">
					<h1>End of turn</h1>
					<span>{component}</span>
					<p>Check that you only have no more than 7 cards in your hand.</p>
					{players.length > 1 ? (
						<button>Time for {players[currentPlayer + 1].userName}</button>
					) : null}
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		playersInfo: state.playersInfo,
	};
}

export default connect(mapStateToProps)(EndTurnLayout);
