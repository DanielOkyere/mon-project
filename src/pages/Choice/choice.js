import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Choice() {
	return (
		<div className="Home p-4 flex flex-col w-full">
			<Navbar />

			<h1 class="font-semibold text-3xl mt-20 text-center">
				Are you one of these?
			</h1>
			<div className="OwnerCustomer flex items-center space-x-4 mt-3 w-full">
				<div class="py-4">
					<Link to="/home">
						<h2 class="font-bold text-2xl mt-6 pb-2">Customer</h2>
					</Link>
					<Link to="/home">
						<img
							src="https://picsum.photos/900/1000?random=1"
							alt="Customer"
							className="rounded img-fluid max-h-screen"></img>
					</Link>
				</div>

				<div class="py-4">
					<Link to="/register/host/credentials">
						<h2 class="font-bold text-2xl mt-7 pb-2">Owner</h2>
					</Link>

					<Link to="/register/host/credentials">
						<img
							src="https://picsum.photos/900/1000?random=7"
							alt="Owner"
							className="rounded img-fluid max-h-screen"></img>
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
