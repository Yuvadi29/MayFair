import Image from "next/image";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
	return (
		<div>
			<nav className="bg-[#012842] text-[15px] p-2 w-full flex justify-between items-center">
				{/* logo  */}
				<div className="ml-[200px]">
					<Image
						src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-logo.webp"
						width={300}
						height={60}
						alt="Mayfair Logo"
					/>
				</div>
				{/* nav links */}
				<div className="mr-[200px] flex justify-center items-center">
					<ul className="text-white mr-2 flex justify-center items-center">
						<li className="uppercase px-2">Overview</li>
						<li className="uppercase px-2">Floor Plans</li>
						<li className="uppercase px-2">Gallery</li>
						<li className="uppercase px-2">Contact Us</li>
						{/* buttons  */}
					</ul>
					{/* button  */}
					<div className="text-white flex justify-center items-center">
						<button className="bg-[#145f9e] px-[10px] py-[8px] uppercase flex justify-center items-center">
							<IoIosListBox className="" />
							<span>Enquire</span>
						</button>
						<button className="bg-[#145f9e] mx-5 px-[10px] py-[8px] flex justify-center items-center">
							<BsFillTelephoneFill /> <span>9860949793</span>
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
