import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomeLayout from "./components/layouts/HomeLayout/HomeLayout";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Route exact path="/" component={HomeLayout} />
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
