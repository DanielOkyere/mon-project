import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import HomeCard from "../../components/HomeCard/HomeCard";

function Choice() {
	return (
		<div className="Home p-4 flex flex-col">
			<Navbar />

		

		

			{/* Home Card */}

			<div className="flex flex-wrap items-center justify-center mt-12 mb-24">

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
		</div>
	
	);

	// return (
	// 	<div className="Home p-4 flex flex-col">
	// 		<Navbar />


}
export default Choice;
