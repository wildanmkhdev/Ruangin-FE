import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import { Office } from "../types/type";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const BrowseOfficeWrapper = () => {
	const [offices, setOffices] = useState<Office[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const fetchOffices = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:8000/api/offices", {
					headers: {
						"X-API-KEY": "apikeymedannnwkwkwwkkw",
					},
				});
				setOffices(response.data.data);
			} catch (err: any) {
				setError(err.message || "Terjadi kesalahan");
			} finally {
				setLoading(false);
			}
		};
		fetchOffices();
	}, []);
	if (loading) {
		return (
			<div className="d-flex justify-content-center">
				<Loading></Loading>
			</div>
		);
	}
	if (error) {
		return <p>errro loading data : {error}</p>;
	}
	return (
		<section
			id="Fresh-Space"
			className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
			<h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
				Browse Our Fresh Space.
				<br />
				For Your Better Productivity.
			</h2>
			<div className="grid grid-cols-3 gap-[30px]">
				{offices.map((office) => (
					<Link key={office.id} to={`/office/${office.slug}`}>
						<OfficeCard office={office}></OfficeCard>
					</Link>

					// aturan pertama key wajib taruh di parent mapping seperti di link
				))}
			</div>
		</section>
	);
};

export default BrowseOfficeWrapper;
