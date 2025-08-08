import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import type { City } from "../types/type";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BrowseCityWrapper = () => {
	// penjelasan kenapa pakai satat ekarena setcitie  bakal kita isi data dari api yg awalnya ciites adaldah array kosong
	const [cities, setCities] = useState<City[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const fetchCities = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/cities`, {
					headers: {
						"X-API-KEY": "apikeymedannnwkwkwwkkw",
					},
				});
				setCities(response.data.data);
			} catch (err: any) {
				setError(err.message || "Terjadi kesalahan");
			} finally {
				setLoading(false);
			}
		};

		fetchCities();
	}, []);

	if (loading) {
		return (
			<div className="d-flex justify-content-center">
				<Loading></Loading>
			</div>
		);
	}

	if (error) {
		return <p>Error loading data: {error}</p>;
	}
	return (
		<section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
			<div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
				<h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
					You Can Choose <br />
					Our Favorite Cities
				</h2>
				<a href="#" className="rounded-full py-3 px-5 bg-white font-bold">
					Explore All City
				</a>
			</div>
			<div className="swiper w-full">
				<div className="swiper-wrapper">
					<Swiper
						direction="horizontal"
						spaceBetween={30}
						slidesPerView="auto"
						slidesOffsetAfter={30}
						slidesOffsetBefore={30}>
						{cities.map((city) => {
							return (
								<SwiperSlide
									key={city.id}
									className=" !w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
									<Link to={`/city/${city.slug}`}>
										<CityCard city={city}></CityCard>
									</Link>
									{/* city yg sebelum sama dengan itu adlaah props atau properti yg dikirim dari city card nah ters city bagian ini {city} itu adlaah hasil di dalam mapping yg cities.map(city) */}
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default BrowseCityWrapper;
