import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-body">{this.props.children}</div>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Layout;
