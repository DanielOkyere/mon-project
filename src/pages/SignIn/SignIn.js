import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function SignIn() {
	return (
<<<<<<< HEAD
		
			<div className="SignIn flex flex-col w-full p-4">
					<Navbar />
				
				<div className="login-div flex flex-col items-center mt-40">
=======
		<>
		<div>
			
		<Navbar />
		</div>
			<div className="SignIn flex items-center justify-center w-full">
				
			
				<div className="login-div flex flex-col items-center">
>>>>>>> 460fd3f (Tailwind clyde (#5))
					<h3 className="font-bold text-2xl mb-3">Log in</h3>
					<input
						type="text"
						className="mb-3 p-2 w-72 rounded-sm"
						placeholder="email"
					/>
					<input
						type="text"
						className="mb-3 p-2 w-72 rounded-sm"
						placeholder="password"
					/>
					<button className="bg-app-pink p-2 w-72 text-app-white rounded text-md hover:bg-app-orange mb-3">
						Sign in
					</button>
					<button className="border border-app-pink p-2 w-72 text-app-pink text-md rounded hover:border-app-orange hover:text-app-orange mb-3">
						Sign in with Google
					</button>
					<button className="text-app-text-dark text-sm hover:text-app-orange mb-1 font-bold">
						Forgot Password?
					</button>
					<div className="sign Up prompt flex items-center justify-center">
						<h5 className="text-sm mr-1 text-app-text-gray">
							Don't have an account?
						</h5>
						<Link to="/register/user">
							<button className="text-app-pink text-sm hover:text-app-orange font-bold">
								Sign Up
							</button>
						</Link>
					</div>
				</div>
			</div>
<<<<<<< HEAD
		
=======
		</>
>>>>>>> 460fd3f (Tailwind clyde (#5))
	);
}

export default SignIn;
