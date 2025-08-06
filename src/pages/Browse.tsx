import { Swiper, SwiperSlide } from "swiper/react";
import FirstOfficeFooter from "../components/Footer";
import CityCard from "../components/CityCard";
import OfficeCard from "../components/OfficeCard";
import BrowseCityWrapper from "../wrappers/BrowseCityWrapper";
import BrowseOfficeWrapper from "../wrappers/BrowseOfficeWrapper";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Company from "../components/Company";
import Header from "../components/Header";
import Benefit from "../components/Benefit";

const Browse = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<>
				<Navbar></Navbar>
				<Header></Header>
				<BrowseCityWrapper></BrowseCityWrapper>
				<Benefit></Benefit>
				<BrowseOfficeWrapper></BrowseOfficeWrapper>
				<FirstOfficeFooter></FirstOfficeFooter>
			</>
		</>
	);
};

export default Browse;
