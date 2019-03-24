import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./index.css";
import Actions from "../../../constants/Actions";

class HomeLayout extends Component {
	state = {
		inputs: [{ userName: "" }],
		badInput: false,
		toNextScreen: false,
	};

	handleChange = e => {
		let inputs = [...this.state.inputs];
		console.log(e.target.value);
		inputs[e.target.dataset.id]["userName"] = e.target.value;
		this.setState({ inputs });
		if (
			Number(e.target.dataset.id) === this.state.inputs.length - 1 &&
			this.state.inputs.length < 4
		)
			this.addInputField();
	};

	handleSubmit = e => {
		e.preventDefault();
		var users = [];
		this.state.inputs.forEach(element => {
			if (element.userName !== "" && element.userName !== " ") {
				users.push({
					userName: element.userName,
					life: 3,
					battery: 0,
					energy: 1,
				});
			}
		});
		if (users.length >= 2) {
			const action = { type: Actions.SAVE_PLAYERS, value: users };
			this.props.dispatch(action);
			this.setState({ toNextScreen: true });
		} else {
			this.setState({ badInput: true });
		}
	};

	addInputField = () => {
		this.setState(prevState => ({
			inputs: [...prevState.inputs, { userName: "" }],
		}));
	};

	render() {
		if (this.state.toNextScreen) {
			return <Redirect to="/scanCards" />;
		} else {
			const inputs = this.state.inputs;
			return (
				<div className="App">
					<header className="App-header">
						<h1>Welcome to Dan the bot!</h1>
						<form onChange={this.handleChange} onSubmit={this.handleSubmit}>
							<div className="form-group">
								{inputs.map((item, id) => {
									let inputId = `input-${id}`,
										className = this.state.badInput
											? "userName form-control badInput"
											: "userName form-control";
									return (
										<div key={`div-input-${id}`}>
											<label htmlFor={inputId}>{`Player #${id + 1}`} </label>
											<input
												type="text"
												name={inputId}
												data-id={id}
												id={inputId}
												defaultValue={inputs[id].userName}
												className={className}
											/>
										</div>
									);
								})}
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</form>
					</header>
				</div>
			);
		}
	}
}

export default connect()(HomeLayout);
