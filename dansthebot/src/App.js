import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomeLayout from "./components/layouts/HomeLayout/index";
import BoardLayout from "./components/layouts/BoardLayout/index";
import EndTurnLayout from "./components/layouts/EndTurnLayout/index";
import QrCodeLayout from "./components/layouts/QrCodeLayout/QrCodeLayout";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Route exact path="/" component={HomeLayout} />

					{/* <Route exact path="/scanCards" component={HomeLayout} /> */}
					<Route exact path="/selectSpace" component={BoardLayout} />
					<Route exact path="/endTurn" component={EndTurnLayout} />
					<Route exact path="/qrcode" component={QrCodeLayout} />
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
