import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow-sm">
			<div className="flex items-center justify-between w-full max-w-[1130px] py-4 px-4 sm:px-6 lg:px-0 mx-auto">
				{/* Logo */}
				<Link to="/">
					<img src="/assets/images/logos/logo.svg" alt="logo" className="h-8" />
				</Link>

				{/* Hamburger (mobile only) */}
				<button
					className="lg:hidden focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<Menu className="w-6 h-6 text-black" />
				</button>

				{/* Desktop Menu */}
				<ul className="hidden lg:flex items-center gap-[50px]">
					<li><Link to="/" className="text-[#000] hover:font-semibold">Browse</Link></li>
					<li><Link to="/popular" className="text-[#000] hover:font-semibold">Popular</Link></li>
					<li><Link to="/categories" className="text-[#000] hover:font-semibold">Categories</Link></li>
					<li><Link to="/events" className="text-[#000] hover:font-semibold">Events</Link></li>
					<li><Link to="/booking" className="text-[#000] hover:font-semibold">My Booking</Link></li>
				</ul>

				{/* Contact Button - always visible on desktop */}
				<a
					href="#"
					className="hidden lg:flex items-center gap-2 rounded-full border border-[#000929] py-2 px-4"
				>
					<Phone className="w-5 h-5" />
					<span className="font-semibold text-sm">Contact Us</span>
				</a>
			</div>

			{/* Mobile Dropdown Menu */}
			{isOpen && (
				<div className="lg:hidden px-4 pb-4">
					<ul className="flex flex-col gap-4 bg-white rounded-md shadow-md p-4">
						<li><Link to="/" onClick={() => setIsOpen(false)}>Browse</Link></li>
						<li><Link to="/popular" onClick={() => setIsOpen(false)}>Popular</Link></li>
						<li><Link to="/categories" onClick={() => setIsOpen(false)}>Categories</Link></li>
						<li><Link to="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
						<li><Link to="/booking" onClick={() => setIsOpen(false)}>My Booking</Link></li>
						<li>
							<a
								href="#"
								className="flex items-center gap-2 rounded-full border border-[#000929] py-2 px-4 mt-2"
							>
								<Phone className="w-5 h-5" />
								<span className="font-semibold text-sm">Contact Us</span>
							</a>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
