import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Clothing from "./views/Clothing";
import Toys from "./views/Toys";
import injectContext from "./store/appContext";
import { App } from "./component/App";
import { Login } from "./component/login.jsx";
import { Navba } from "./component/navbar";
import { Footer } from "./component/footer";
import Products from "./views/Products";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navba />
					<Routes>
					<Route path="/" element={<App />}>Register</Route>
					<Route path="/login/*" element={<Login />}>Login</Route>
						{/* <Route exact path="/Pages">
							<Clothing />
							<Toys />
						</Route>
						<Route exact path="/Products">
							<Products />
						</Route> */}
						{/* <Route>
							<h1>Not found!</h1>
						</Route> */}
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
