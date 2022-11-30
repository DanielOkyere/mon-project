import React, { useState } from "react";

function Footer() {
	return (
		

		<footer className="p-4 bg-pink rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-pink-800">
			<span className=" text-white sm:text-center dark:text-white-400">
				© 2022{" "}
				<a href="https://flowbite.com/" className="hover:underline">
					Flowbite™
				</a>
				. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3  text-white dark:text-white-400 sm:mt-0">
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6 ">
						About
					</a>
				</li>
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6">
						Privacy Policy
					</a>
				</li>
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6">
						Licensing
					</a>
				</li>
				<li>
					<a href="#" className="hover:underline">
						Contact
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
