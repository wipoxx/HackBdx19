import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./index.css";

class BoardLayout extends Component {
	state = {
		toNextScreen: false,
		nbAttemptLeft: 0,
	};

	handleSubmit = e => {
		e.preventDefault();
		//todo: call the model function that check if the bot is on the space proposed
		document.getElementById("introText").innerHTML =
			"<p>Sorry it's not the good space. Please try again.</p>";
		if (this.state.nbAttemptLeft === 0) {
			this.setState({ toNextScreen: true });
		}
	};

	render() {
		if (this.state.toNextScreen) {
			//scanCards
			return <Redirect to="/endTurn" />;
		} else {
			var rowsNb = [];
			var colsNb = [];
			for (var i = 1; i < 21; i++) {
				rowsNb.push(i);
				colsNb.push(i);
			}
			return (
				<div>
					<div className="container">
						<h1>Choose the space</h1>
						<br />
						<p id="introText">
							You have to choose the space on which yout bot will go with your
							algorithm, to show that you understand what you did.
						</p>
						<p>You have {this.state.nbAttemptLeft} attempts left</p>
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label htmlFor="rowSelect">Row: </label>
								<select name="rowSelect" className="form-control">
									{rowsNb.map((item, key) => {
										return (
											<option key={`row-${key}`} value={item}>
												{item}
											</option>
										);
									})}
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="colSelect">Column: </label>
								<select name="colSelect" className="form-control">
									{colsNb.map((item, key) => {
										return (
											<option key={`col-${key}`} value={item}>
												{item}
											</option>
										);
									})}
								</select>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			);
		}
	}
}

export default connect()(BoardLayout);
