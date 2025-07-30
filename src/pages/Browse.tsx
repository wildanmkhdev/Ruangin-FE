import { Swiper, SwiperSlide } from "swiper/react";
import FirstOfficeFooter from "../components/Footer";
import CityCard from "../components/CityCard";
import OfficeCard from "../components/OfficeCard";
import BrowseCityWrapper from "../wrappers/BrowseCityWrapper";
import BrowseOfficeWrapper from "../wrappers/BrowseOfficeWrapper";
import { useState } from "react";

const Browse = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<>
				<nav className="bg-white fixed top-0 left-0 w-full z-[99999] shadow-md">
					<div className="flex items-center justify-between max-w-[1130px] mx-auto py-[22px] px-4">
						<a href="index.html">
							<img
								src="/assets/images/logos/logo.svg"
								alt="logo"
								className="h-8"
							/>
						</a>

						{/* Desktop Menu */}
						<ul className="hidden md:flex items-center gap-[50px]">
							<li>
								<a href="" className="hover:text-blue-600">
									Browse
								</a>
							</li>
							<li>
								<a href="" className="hover:text-blue-600">
									Popular
								</a>
							</li>
							<li>
								<a href="" className="hover:text-blue-600">
									Categories
								</a>
							</li>
							<li>
								<a href="" className="hover:text-blue-600">
									Events
								</a>
							</li>
							<li>
								<a
									href="view-booking-details.html"
									className="hover:text-blue-600">
									My Booking
								</a>
							</li>
						</ul>

						{/* Contact Button */}
						<a
							href="#"
							className="hidden md:flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5">
							<img
								src="/assets/images/icons/call.svg"
								className="w-6 h-6"
								alt="icon"
							/>
							<span className="font-semibold">Contact Us</span>
						</a>

						{/* Hamburger */}
						<button
							className="md:hidden flex flex-col gap-1"
							onClick={() => setIsOpen(!isOpen)}
							aria-label="Toggle Menu">
							<span className="w-6 h-0.5 bg-black"></span>
							<span className="w-6 h-0.5 bg-black"></span>
							<span className="w-6 h-0.5 bg-black"></span>
						</button>
					</div>

					{/* Mobile Menu */}
					<div
						className={`md:hidden transition-all duration-300 ease-in-out bg-white shadow-lg px-4 ${
							isOpen ? "max-h-[500px] py-4" : "max-h-0 overflow-hidden"
						}`}>
						<ul className="flex flex-col gap-4">
							<li>
								<a href="" className="block text-black hover:text-blue-600">
									Browse
								</a>
							</li>
							<li>
								<a href="" className="block text-black hover:text-blue-600">
									Popular
								</a>
							</li>
							<li>
								<a href="" className="block text-black hover:text-blue-600">
									Categories
								</a>
							</li>
							<li>
								<a href="" className="block text-black hover:text-blue-600">
									Events
								</a>
							</li>
							<li>
								<a
									href="view-booking-details.html"
									className="block text-black hover:text-blue-600">
									My Booking
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center gap-2 border border-[#000929] py-2 px-4 rounded-full w-fit">
									<img
										src="/assets/images/icons/call.svg"
										className="w-5 h-5"
										alt="icon"
									/>
									<span className="font-semibold">Contact Us</span>
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<header className="flex flex-col w-full">
					{/* Hero Banner Section */}
					<section
						id="Hero-Banner"
						className="relative flex flex-col md:flex-row h-auto md:h-[720px] -mb-[93px]">
						{/* Hero Text */}
						<div
							id="Hero-Text"
							className="relative flex flex-col w-full md:max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-6 md:p-10 gap-6 md:gap-[30px] bg-white mt-6 md:mt-[70px] mx-auto md:ml-[calc((100%-1130px)/2)] z-10">
							<div className="flex items-center w-fit rounded-full py-2 px-4 gap-2 md:gap-[10px] bg-[#000929]">
								<img
									src="/assets/images/icons/crown-white.svg"
									className="w-5 h-5"
									alt="icon"
								/>
								<span className="font-semibold text-white text-sm md:text-base">
									We’ve won top productivity 500 fortunes
								</span>
							</div>
							<h1 className="font-extrabold text-3xl md:text-[50px] leading-tight md:leading-[60px]">
								All Great Offices.
								<br />
								Grow Your Business.
							</h1>
							<p className="text-base md:text-lg leading-relaxed text-[#000929]">
								Kantor yang tepat dapat memberikan impact pekerjaan menjadi
								lebih baik dan sehat dalam tumbuhkan karir.
							</p>
							<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5">
								<a
									href="#"
									className="flex items-center rounded-full p-4 gap-3 bg-[#0D903A]">
									<img
										src="/assets/images/icons/slider-horizontal-white.svg"
										className="w-6 h-6 md:w-[30px] md:h-[30px]"
										alt="icon"
									/>
									<span className="font-bold text-base md:text-xl text-[#F7F7FD]">
										Explore Now
									</span>
								</a>
								<a
									href="#"
									className="flex items-center rounded-full border border-[#000929] p-4 gap-3 bg-white">
									<img
										src="/assets/images/icons/video-octagon.svg"
										className="w-6 h-6 md:w-[30px] md:h-[30px]"
										alt="icon"
									/>
									<span className="font-semibold text-base md:text-xl">
										Watch Story
									</span>
								</a>
							</div>
						</div>

						{/* Hero Image */}
						<div
							id="Hero-Image"
							className="relative md:absolute md:right-0 w-full md:w-[calc(100%-((100%-1130px)/2)-305px)] h-[300px] md:h-[720px] rounded-bl-[40px] overflow-hidden mt-6 md:mt-0">
							<img
								src="/assets/images/backgrounds/banner.png"
								className="w-full h-full object-cover"
								alt="hero background"
							/>
						</div>
					</section>

					{/* Logo & Stats Section */}
					<div className="flex flex-col pt-[80px] md:pt-[150px] pb-10 px-6 sm:px-[60px] md:px-[120px] gap-10 bg-[#0D903A]">
						<div className="logo-contianer flex items-center justify-center flex-wrap max-w-[1130px] h-auto gap-8 md:gap-[60px] mx-auto">
							<img
								src="/assets/images/logos/TESLA.svg"
								alt="clients logo"
								className="h-6 md:h-[38px]"
							/>
							<img
								src="/assets/images/logos/Libra 2.svg"
								alt="clients logo"
								className="h-6 md:h-[38px]"
							/>
							<img
								src="/assets/images/logos/Binance logo.svg"
								alt="clients logo"
								className="h-6 md:h-[38px]"
							/>
							<img
								src="/assets/images/logos/Facebook 7.svg"
								alt="clients logo"
								className="h-6 md:h-[38px]"
							/>
						</div>

						<div className="flex flex-wrap justify-center gap-6 md:gap-[50px]">
							{[
								{ title: "Comfortable Space", value: "580M+" },
								{ title: "Startups Succeed", value: "98%" },
								{ title: "Countries", value: "90+" },
								{ title: "Supportive Events", value: "139M+" },
							].map((stat, i) => (
								<div
									key={i}
									className="flex flex-col gap-1 text-center w-1/2 sm:w-auto">
									<p className="text-sm sm:text-xl text-[#F7F7FD]">
										{stat.title}
									</p>
									<p className="font-bold text-2xl sm:text-[38px] text-white leading-tight">
										{stat.value}
									</p>
								</div>
							))}
						</div>
					</div>
				</header>

				<BrowseCityWrapper></BrowseCityWrapper>
				<section
					id="Benefits"
					className="flex items-center justify-center w-[1015px] mx-auto gap-[100px] mt-[100px]">
					<h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
						We Might Good <br />
						For Your Business
					</h2>
					<div className="grid grid-cols-2 gap-[30px]">
						<div className="flex items-center gap-4">
							<div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
								<img
									src="/assets/images/icons/security-user.svg"
									className="w-[34px] h-[34px]"
									alt="icon"
								/>
							</div>
							<div className="flex flex-col gap-[5px]">
								<p className="font-bold text-lg leading-[27px]">
									Privacy-First Design
								</p>
								<p className="text-sm leading-[24px]">
									Lorem available without even higher tax that cost much
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
								<img
									src="/assets/images/icons/group.svg"
									className="w-[34px] h-[34px]"
									alt="icon"
								/>
							</div>
							<div className="flex flex-col gap-[5px]">
								<p className="font-bold text-lg leading-[27px]">
									Easy Move Access
								</p>
								<p className="text-sm leading-[24px]">
									Lorem available without even higher tax that cost much
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
								<img
									src="/assets/images/icons/3dcube.svg"
									className="w-[34px] h-[34px]"
									alt="icon"
								/>
							</div>
							<div className="flex flex-col gap-[5px]">
								<p className="font-bold text-lg leading-[27px]">
									Flexibility Spaces
								</p>
								<p className="text-sm leading-[24px]">
									Lorem available without even higher tax that cost much
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
								<img
									src="/assets/images/icons/cup.svg"
									className="w-[34px] h-[34px]"
									alt="icon"
								/>
							</div>
							<div className="flex flex-col gap-[5px]">
								<p className="font-bold text-lg leading-[27px]">
									Top-Rated Office
								</p>
								<p className="text-sm leading-[24px]">
									Lorem available without even higher tax that cost much
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
								<img
									src="/assets/images/icons/coffee.svg"
									className="w-[34px] h-[34px]"
									alt="icon"
								/>
							</div>
							<div className="flex flex-col gap-[5px]">
								<p className="font-bold text-lg leading-[27px]">
									Extra Snacks Available
								</p>
								<p className="text-sm leading-[24px]">
									Lorem available without even higher tax that cost much
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
								<img
									src="/assets/images/icons/home-trend-up.svg"
									className="w-[34px] h-[34px]"
									alt="icon"
								/>
							</div>
							<div className="flex flex-col gap-[5px]">
								<p className="font-bold text-lg leading-[27px]">
									Sustain for Business
								</p>
								<p className="text-sm leading-[24px]">
									Lorem available without even higher tax that cost much
								</p>
							</div>
						</div>
					</div>
				</section>
				<BrowseOfficeWrapper></BrowseOfficeWrapper>

				<FirstOfficeFooter></FirstOfficeFooter>
			</>
		</>
	);
};

export default Browse;
