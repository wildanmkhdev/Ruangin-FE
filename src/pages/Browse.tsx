import { Swiper, SwiperSlide } from "swiper/react";
import FirstOfficeFooter from "../components/Footer";
import CityCard from "../components/CityCard";
import OfficeCard from "../components/OfficeCard";
import BrowseCityWrapper from "../wrappers/BrowseCityWrapper";
import BrowseOfficeWrapper from "../wrappers/BrowseOfficeWrapper";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Browse = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<>
				<Navbar></Navbar>

				<header className="flex flex-col w-full">
					<section
						id="Hero-Banner"
						className="relative flex flex-col lg:h-[720px] -mb-[93px]">
						{/* Hero Image muncul di semua ukuran layar */}
						<div
							id="Hero-Image"
							className="relative lg:absolute right-0 w-full lg:w-[calc(100%-((100%-1130px)/2)-305px)] h-[300px] sm:h-[400px] lg:h-[720px] rounded-bl-[30px] overflow-hidden">
							<img
								src="assets/images/backgrounds/banner.png"
								className="w-full h-full object-cover"
								alt="hero background"
							/>
						</div>

						{/* Hero Text */}
						<div
							id="Hero-Text"
							className="relative z-10 flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-6 sm:p-8 lg:p-10 gap-6 bg-white mt-10 lg:mt-[70px] mx-auto lg:ml-[calc((100%-1130px)/2)]">
							<div className="flex items-center justify-center lg:justify-start w-fit rounded-full py-2 px-4 gap-2 bg-[#000929]">
								<img
									src="assets/images/icons/crown-white.svg"
									className="w-5 h-5"
									alt="icon"
								/>
								<span className="font-semibold text-white text-sm sm:text-base text-center lg:text-left">
									We’ve won top productivity 500 fortunes
								</span>
							</div>
							<h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-center lg:text-left">
								All Great Offices.
								<br />
								Grow Your Business.
							</h1>
							<p className="text-base sm:text-lg leading-7 sm:leading-8 text-[#000929] text-center lg:text-left">
								Kantor yang tepat dapat memberikan impact pekerjaan menjadi
								lebih baik dan sehat dalam tumbuhkan karir.
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
								<a
									href="#"
									className="flex items-center justify-center rounded-full px-6 py-4 gap-3 bg-[#0D903A]">
									<img
										src="assets/images/icons/slider-horizontal-white.svg"
										className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]"
										alt="icon"
									/>
									<span className="font-bold text-base sm:text-xl leading-[30px] text-[#F7F7FD]">
										Explore Now
									</span>
								</a>
								<a
									href="#"
									className="flex items-center justify-center rounded-full border border-[#000929] px-6 py-4 gap-3 bg-white">
									<img
										src="assets/images/icons/video-octagon.svg"
										className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]"
										alt="icon"
									/>
									<span className="font-semibold text-base sm:text-xl leading-[30px]">
										Watch Story
									</span>
								</a>
							</div>
						</div>
					</section>

					{/* Logo dan Statistik */}
				</header>

				<BrowseCityWrapper></BrowseCityWrapper>
				<div className="flex flex-col mt-10 pt-16 sm:pt-[150px] pb-10 px-6 sm:px-[60px] lg:px-[500px] gap-10 bg-[#0D903A]">
					{/* Logo Container */}
					<div className="logo-container grid grid-cols-2 sm:flex items-center justify-center flex-wrap max-w-screen-xl mx-auto gap-10 sm:gap-[60px]">
						<img
							src="assets/images/logos/TESLA.svg"
							className="h-6 sm:h-8 mx-auto"
							alt="clients logo"
						/>
						<img
							src="assets/images/logos/Libra 2.svg"
							className="h-6 sm:h-8 mx-auto"
							alt="clients logo"
						/>
						<img
							src="assets/images/logos/Binance logo.svg"
							className="h-6 sm:h-8 mx-auto"
							alt="clients logo"
						/>
						<img
							src="assets/images/logos/Facebook 7.svg"
							className="h-6 sm:h-8 mx-auto"
							alt="clients logo"
						/>
					</div>

					{/* Statistic Section */}
					<div className="grid grid-cols-2 sm:flex justify-center items-center gap-6 sm:gap-[50px] text-center">
						<div className="flex flex-col gap-[2px]">
							<p className="text-base sm:text-xl text-[#F7F7FD]">
								Comfortable Space
							</p>
							<p className="font-bold text-[32px] sm:text-[38px] leading-[50px] sm:leading-[57px] text-white">
								580M+
							</p>
						</div>
						<div className="flex flex-col gap-[2px]">
							<p className="text-base sm:text-xl text-[#F7F7FD]">
								Startups Succeed
							</p>
							<p className="font-bold text-[32px] sm:text-[38px] leading-[50px] sm:leading-[57px] text-white">
								98%
							</p>
						</div>
						<div className="flex flex-col gap-[2px]">
							<p className="text-base sm:text-xl text-[#F7F7FD]">Countries</p>
							<p className="font-bold text-[32px] sm:text-[38px] leading-[50px] sm:leading-[57px] text-white">
								90+
							</p>
						</div>
						<div className="flex flex-col gap-[2px]">
							<p className="text-base sm:text-xl text-[#F7F7FD]">
								Supportive Events
							</p>
							<p className="font-bold text-[32px] sm:text-[38px] leading-[50px] sm:leading-[57px] text-white">
								139M+
							</p>
						</div>
					</div>
				</div>

				<BrowseOfficeWrapper></BrowseOfficeWrapper>

				<FirstOfficeFooter></FirstOfficeFooter>
			</>
		</>
	);
};

export default Browse;
