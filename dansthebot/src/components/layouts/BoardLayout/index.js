import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class BoardLayout extends Component {
	state = {
		toNextScreen: false,
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ toNextScreen: true });
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
					<h1>Choose the space</h1>
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
			);
		}
	}
}

export default connect()(BoardLayout);
