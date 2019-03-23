import React, { Component } from "react";
import "./HomeLayout.css";
// import logo from "../../assets/images/logo.svg";

class AboutLayout extends Component {
	state = {
		inputs: [{ userName: "" }],
	};

	handleChange = e => {
		if (["userName"].includes(e.target.className)) {
			let inputs = [...this.state.inputs];
			inputs[e.target.dataset.id][e.target.className] = e.target.value;
			this.setState({ inputs });
			if (Number(e.target.dataset.id) === this.state.inputs.length - 1)
				this.addInputField();
		}
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	addInputField = () => {
		this.setState(prevState => ({
			inputs: [...prevState.inputs, { userName: "" }],
		}));
	};

	render() {
		const inputs = this.state.inputs;
		return (
			<div className="App">
				<header className="App-header">
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<h1>Welcome to Dan the bot!</h1>
					<form onChange={this.handleChange} onSubmit={this.handleSubmit}>
						{inputs.map((item, id) => {
							let inputId = `input-${id}`;
							return (
								<div key={`div-input-${id}`}>
									<label htmlFor={inputId}>{`Player #${id + 1}`} </label>
									<input
										type="text"
										name={inputId}
										data-id={id}
										id={inputId}
										defaultValue={inputs[id].userName}
										className="userName"
									/>
								</div>
							);
						})}
						<input type="submit" value="Submit" />
					</form>
				</header>
			</div>
		);
	}
}

export default AboutLayout;
