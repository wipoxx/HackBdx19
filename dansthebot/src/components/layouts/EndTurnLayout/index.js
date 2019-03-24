import React, { Component } from "react";
import { connect } from "react-redux";

class EndTurnLayout extends Component {
	state = {};
	render() {
		return (
			<div className="App">
				<h1>End of turn</h1>
			</div>
		);
	}
}

export default connect()(EndTurnLayout);
