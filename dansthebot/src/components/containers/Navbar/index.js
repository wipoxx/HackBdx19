import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import playersInfo from "./../../../reducers/playersReducer";
class Navbar extends Component {
	state = {};
	render() {
		const playersInfo = this.props.playersInfo;

		if (playersInfo.players.length < 1) {
			return (
				<nav className="navbar navbar-expand-lg navbar-dark">
					<p>HackBdx</p>
				</nav>
			);
		} else {
			const currentPlayer = playersInfo.players[playersInfo.currentPlayer];
			const life = currentPlayer.life;
			const battery = currentPlayer.battery;
			const energy = currentPlayer.energy;
			const userName = currentPlayer.userName;

			var batteryImg = require("../../../assets/images/battery_" +
				battery +
				".png");
			var fullHeartImg = require("../../../assets/images/heart_full.png");
			var emptyHeartImg = require("../../../assets/images/heart_empty.png");
			var energyImg = require("../../../assets/images/energy.png");
			return (
				<nav
					className="navbar navbar-expand-lg navbar-dark bg-dark"
					data-spy="affix"
				>
					<span className="lifePts">
						<img
							// @ts-ignore
							src={life >= 1 ? fullHeartImg : emptyHeartImg}
							alt="Player's first point of life"
							className="heartIcon"
						/>
						<img
							// @ts-ignore
							src={life >= 2 ? fullHeartImg : emptyHeartImg}
							alt="Player's second point of life"
							className="heartIcon"
						/>
						<img
							// @ts-ignore
							src={life === 3 ? fullHeartImg : emptyHeartImg}
							alt="Player's third point of life"
							className="heartIcon"
						/>
					</span>
					<span className="batteryPts">
						<img
							// @ts-ignore
							src={batteryImg}
							alt="Player's batteries"
							className="icon"
						/>
					</span>
					<span className="energyPts">
						<p>{energy}</p>
						<img
							// @ts-ignore
							src={energyImg}
							alt="Player's energy"
							className="icon"
						/>
						{/* <span className="gameInfo"> */}
						<p>Player: {userName}</p>
						{/* <p>Turn #</p> */}
						{/* </span> */}
					</span>
				</nav>
			);
		}
	}
}

//Heart by Cristiano Zoucas from the Noun Project
//Battery by Sholawat Nariyah from the Noun Project
//Lightning by ✦ Shmidt Sergey ✦ from the Noun Project

function mapStateToProps(state) {
	return {
		playersInfo: state.playersInfo,
	};
}

export default connect(mapStateToProps)(Navbar);
