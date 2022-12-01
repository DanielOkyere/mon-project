import React from "react";
import HomeCard from "../../components/HomeCard/HomeCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';



function Home() {
	return (
		<div className="Home p-4 flex flex-col w-full">
			<Navbar />

			{/* Room Type nav bar */}
			<div className="Room-type flex flex-wrap items-center justify-center mt-8 mb-4">
				<ul className="flex">
					<li className="mx-6">Hotel</li>
					<li className="mx-6">Hostel</li>
					<li className="mx-6">Guest House</li>
					<li className="mx-6">Apartment</li>
					<li className="mx-6">Full House</li>
					<li className="mx-6">Shared House</li>
				</ul>
			</div>

			{/* Search Bar */}
			<div className="Search-bar-outer flex items-center justify-center">
				<div className="Search-Bar">
					<input
						className="border-r border-app-pink px-2 py-2"
						placeholder="City, province"
						type="text"
					/>
					<input
						className="border-r border-app-pink px-2 py-2"
						placeholder="from"
						type="date"
					/>
					<input
						className="border-r border-app-pink px-2 py-2"
						placeholder="to"
						type="date"
					/>
					<input className="px-4 py-2" placeholder="rooms" type="number" />
					<button className="bg-app-pink py-2 rounded-sm px-6 text-white hover:bg-app-orange">
						<Link className="" to="/search">
							Search
						</Link>
					</button>
				</div>
			</div>

			{/* Home Card */}
			<div className="flex flex-wrap items-center justify-center mt-12 mb-24">
				<HomeCard img="https://picsum.photos/700/500?random=1" />
				<HomeCard img="https://picsum.photos/700/500?random=2" />
				<HomeCard img="https://picsum.photos/700/500?random=3" />
				<HomeCard img="https://picsum.photos/700/500?random=4" />
				<HomeCard img="https://picsum.photos/700/500?random=5" />
				<HomeCard img="https://picsum.photos/700/500?random=6" />
				<HomeCard img="https://picsum.photos/700/500?random=7" />
				<HomeCard img="https://picsum.photos/700/500?random=8" />
				<HomeCard img="https://picsum.photos/700/500?random=9" />
				<HomeCard img="https://picsum.photos/700/500?random=10" />
				<HomeCard img="https://picsum.photos/700/500?random=11" />
				<HomeCard img="https://picsum.photos/700/500?random=12" />
				<HomeCard img="https://picsum.photos/700/500?random=13" />
				<HomeCard img="https://picsum.photos/700/500?random=14" />
				<HomeCard img="https://picsum.photos/700/500?random=15" />
				<HomeCard img="https://picsum.photos/700/500?random=16" />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
