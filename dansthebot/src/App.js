import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomeLayout from "./components/layouts/HomeLayout/HomeLayout";
import QrCodeLayout from "./components/layouts/HomeLayout/QrCodeLayout";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Route exact path="/" component={HomeLayout} />
					<Route exact path="/qrcode" component={QrCodeLayout} />
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
