import React, { Component } from "react";
import "./Layout.css";
import Navbar from "../containers/Navbar/index";

class Layout extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="App-body">{this.props.children}</div>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Layout;
