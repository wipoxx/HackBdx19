import React, { Component } from "react";
// import Header from "./Header";
// import Footer from "./Footer";

class Layout extends Component {
	render() {
		return (
			<div className="layout-fond">
				{/* <Header /> */}
				<div className="layout-component">{this.props.children}</div>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Layout;
