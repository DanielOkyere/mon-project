import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

function Choice() {
	return (
		<div className="Home flex flex-col">
			<Navbar />

			<h1>Are you one of these?</h1>
			<div className="OwnerCustomer">
				<div>
					<Link to="/home">
						<h2>Customer</h2>
					</Link>
					<Link to="/home">
						<img
							src="https://picsum.photos/700/500?random=1"
							alt="Customer"
							className="rounded img-fluid"></img>
					</Link>
				</div>

				<div>
					<Link to="/register/host/credentials">
						<h2>Owner</h2>
					</Link>
				</div>
				<Link to="/register/host/credentials">
					<img
						src="https://picsum.photos/700/500?random=7"
						alt="Owner"
						className="rounded img-fluid"></img>
				</Link>
			</div>
		</div>
	);
}
export default Choice;
