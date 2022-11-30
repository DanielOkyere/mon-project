import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import BuildingDetails from "./pages/BuildingDetails/BuildingDetails";
import RoomDetails from "./pages/RoomDetails/RoomDetails";
import SignIn from "./pages/SignIn/SignIn";
import SearchMenu from "./pages/SearchMenu/SearchMenu";
import UserRegister from "./pages/UserRegister/UserRegister";
import HostRegister1 from "./pages/HostRegister1/HostRegister1";
import HostRegister2 from "./pages/HostRegister2/HostRegister2";
import HostRegister3 from "./pages/HostRegister3/HostRegister3";
import HostRegister4 from "./pages/HostRegister4/HostRegister4";
import Choice from "./pages/Choice/choice";


import React from "react";

import "./App.css";
import AddRoom from "./pages/AddRoom/AddRoom";

function App() {
	return (
		<div className="App-outer">
			<div className="App">
				<Router>
					<Routes>
						<Route path="/search" element={<SearchMenu />} />
						<Route path="/room-details" element={<RoomDetails />} />
						<Route path="/login" element={<SignIn />} />
						<Route path="/register/user" element={<UserRegister />} />
						<Route
							path="/register/host/credentials"
							element={<HostRegister1 />}
						/>
						<Route
							path="/register/host/property-type"
							element={<HostRegister2 />}
						/>
						<Route
							path="/register/host/location-details"
							element={<HostRegister3 />}
						/>
						<Route
							path="/register/host/property-details"
							element={<HostRegister4 />}
						/>
						<Route path="/add-room" element={<AddRoom />} />
						<Route path="/building-details" element={<BuildingDetails />} />
						<Route path="/home" element={<Home />} />
						<Route path="/" element={<Choice />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
