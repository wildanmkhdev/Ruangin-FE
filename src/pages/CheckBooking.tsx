import { useState } from "react";
import type z from "zod";
import type { BookingDetails } from "../types/type";
import axios from "axios";
import { viewBookingSchema } from "../types/validationBooking";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CheckBooking = () => {
	const [formData, setFormData] = useState({
		phone_number: "",
		booking_trx_id: "",
	});
	const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
		null
	);
	const [error, setError] = useState<string | null>(null);
	const baseURL = "http://127.0.0.1:8000/storage/";

	// Format date function
	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		return new Date(dateString).toLocaleDateString("id-ID", options);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			// form data ini menampung hasil inputan berupa array dari input yg akan di kirim ke be
			[e.target.name]: e.target.value,
		});

		// Clear errors when user starts typing
		if (formErrors.length > 0) {
			setFormErrors([]);
		}
		if (error) {
			setError(null);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log("validating form data.....");

		const validation = viewBookingSchema.safeParse(formData);
		if (!validation.success) {
			console.error("validation error", validation.error.issues);
			setFormErrors(validation.error.issues);
			return;
		}

		console.log("form data is submitting", formData);
		setIsLoading(true);
		setError(null);
		setBookingDetails(null);

		try {
			const response = await axios.post(
				`${API_BASE_URL}/check-booking`,
				{
					...formData,
				},
				{
					headers: {
						"X-API-KEY": "apikeymedannnwkwkwwkkw",
						"Content-Type": "application/json",
					},
				}
			);
			console.log("we are check booking", response.data.data);
			setBookingDetails(response.data.data);
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.error("Error submitting form:", error);
				if (error.response?.status === 404) {
					setError(
						"Booking tidak ditemukan. Periksa kembali nomor telepon dan Booking TRX ID Anda."
					);
				} else if (error.response?.data?.message) {
					setError(error.response.data.message);
				} else {
					setError(
						"Terjadi kesalahan saat mencari booking. Silakan coba lagi."
					);
				}
			} else {
				console.error("Unexpected error:", error);
				setError("Terjadi kesalahan yang tidak terduga.");
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div
				id="Banner"
				className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]">
				<h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px] text-white mb-5 z-20">
					View Your Booking Details
				</h1>
				<div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
				<img
					src="assets/images/thumbnails/thumbnail-details-5.png"
					className="absolute w-full h-full object-cover object-top"
					alt=""
				/>
			</div>
			<section
				id="Check-Booking"
				className="relative flex flex-col w-[930px] shrink-0 gap-[30px] mx-auto mb-[100px] z-20">
				<form
					onSubmit={handleSubmit}
					className="flex items-end rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[16px] bg-white">
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="booking_trx_id" className="font-semibold">
							Booking TRX ID
						</label>
						<div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
							<img
								src="assets/images/icons/receipt-text-black.svg"
								className="w-6 h-6"
								alt="icon"
							/>
							<input
								type="text"
								name="booking_trx_id"
								onChange={handleChange}
								value={formData.booking_trx_id}
								id="booking_trx_id"
								className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
								placeholder="Write your booking trx id"
							/>
						</div>
						{formErrors.find((error) =>
							error.path.includes("booking_trx_id")
						) && (
							<p className="text-red-500 text-sm">Booking TRX ID wajib diisi</p>
						)}
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="phone_number" className="font-semibold">
							Phone Number
						</label>
						<div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
							<img
								src="assets/images/icons/call-black.svg"
								className="w-6 h-6"
								alt="icon"
							/>
							<input
								type="tel"
								name="phone_number"
								onChange={handleChange}
								value={formData.phone_number}
								id="phone_number"
								className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
								placeholder="Write your valid number"
							/>
						</div>
						{formErrors.find((error) =>
							error.path.includes("phone_number")
						) && (
							<p className="text-red-500 text-sm">Nomor telepon wajib diisi</p>
						)}
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="flex items-center justify-center rounded-full p-[12px_30px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD] disabled:opacity-50 disabled:cursor-not-allowed">
						<span className="text-nowrap">
							{isLoading ? "Loading..." : "Check Booking"}
						</span>
					</button>
				</form>

				{/* Error Message */}
				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-[20px]">
						<p>
							<strong>Error:</strong> {error}
						</p>
					</div>
				)}

				{/* Loading State */}
				{/* jika masih loading tampikan spinenr jika udah tam pilkan hasil */}
				{isLoading && (
					<div className="flex items-center justify-center py-8">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0D903A]"></div>
						<p className="ml-4 text-gray-600">Mencari booking Anda...</p>
					</div>
				)}

				{/* Booking Details */}
				{bookingDetails && (
					<div id="Result" className="grid grid-cols-2 gap-[30px]">
						<div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
							<div className="flex items-center gap-4">
								<div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
									<img
										src={`${baseURL}${bookingDetails.office.thumbnail}`}
										className="w-full h-full object-cover"
										alt="thumbnail"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<p className="font-bold text-xl leading-[30px]">
										{bookingDetails.office.name}
									</p>
									<div className="flex items-center gap-[6px]">
										<img
											src="assets/images/icons/location.svg"
											className="w-6 h-6"
											alt="icon"
										/>
										<p className="font-semibold">
											{bookingDetails.office.city.name}
										</p>
									</div>
								</div>
							</div>
							<hr className="border-[#F6F5FD]" />
							<div className="flex flex-col gap-4">
								<h2 className="font-bold">Customer Details</h2>
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold">Full Name</h3>
									<div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
										<img
											src="assets/images/icons/security-user-black.svg"
											className="w-6 h-6"
											alt="icon"
										/>
										<p className="font-semibold">{bookingDetails.name}</p>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold">Phone Number</h3>
									<div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
										<img
											src="assets/images/icons/call-black.svg"
											className="w-6 h-6"
											alt="icon"
										/>
										<p className="font-semibold">
											{bookingDetails.phone_number}
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold">Started At</h3>
									<div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
										<img
											src="assets/images/icons/calendar-black.svg"
											className="w-6 h-6"
											alt="icon"
										/>
										<p className="font-semibold">
											{formatDate(bookingDetails.started_at)}
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold">Ended At</h3>
									<div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
										<img
											src="assets/images/icons/calendar-black.svg"
											className="w-6 h-6"
											alt="icon"
										/>
										<p className="font-semibold">
											{formatDate(bookingDetails.ended_at)}
										</p>
									</div>
								</div>
							</div>
							<hr className="border-[#F6F5FD]" />
							<div className="flex items-center gap-3">
								<img
									src="assets/images/icons/shield-tick.svg"
									className="w-[30px] h-[30px]"
									alt="icon"
								/>
								<p className="font-semibold leading-[28px]">
									Privasi Anda aman bersama kami.
								</p>
							</div>
						</div>
						<div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
							<h2 className="font-bold">Order Details</h2>
							<div className="flex flex-col gap-5">
								<div className="flex items-center justify-between">
									<p className="font-semibold">Status Pembayaran</p>
									<p
										className={`rounded-full w-fit p-[6px_16px] font-bold text-sm leading-[21px] text-[#F7F7FD] ${
											bookingDetails.is_paid
												? "bg-[#0D903A]" // Green for paid
												: "bg-[#FF852D]" // Orange for pending
										}`}>
										{bookingDetails.is_paid ? "SUCCESS" : "PENDING"}
									</p>
								</div>
								<div className="flex items-center justify-between">
									<p className="font-semibold">Booking TRX ID</p>
									<p className="font-bold">{bookingDetails.booking_trx_id}</p>
								</div>
								<div className="flex items-center justify-between">
									<p className="font-semibold">Duration</p>
									<p className="font-bold">
										{bookingDetails.duration} Days Working
									</p>
								</div>
								<div className="flex items-center justify-between">
									<p className="font-semibold">Total Amount</p>
									<p className="font-bold text-[22px] leading-[33px] text-[#0D903A]">
										Rp {bookingDetails.total_amount.toLocaleString("id-ID")}
									</p>
								</div>
							</div>
							<hr className="border-[#F6F5FD]" />
							<h2 className="font-bold">Bonus Packages For You</h2>
							<div className="flex justify-between">
								<div className="flex items-center gap-4">
									<img
										src="assets/images/icons/coffee.svg"
										className="w-[34px] h-[34px]"
										alt="icon"
									/>
									<div className="flex flex-col gap-[2px]">
										<p className="font-bold">Extra Snacks</p>
										<p className="text-sm leading-[21px]">Work-Life Balance</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<img
										src="assets/images/icons/group.svg"
										className="w-[34px] h-[34px]"
										alt="icon"
									/>
									<div className="flex flex-col gap-[2px]">
										<p className="font-bold">Free Move</p>
										<p className="text-sm leading-[21px]">Anytime 24/7</p>
									</div>
								</div>
							</div>
							<hr className="border-[#F6F5FD]" />
							<a
								href="tel:+62123456789"
								className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[12px_20px] gap-3 bg-white font-semibold hover:bg-gray-50 transition-colors">
								<img
									src="assets/images/icons/call-black.svg"
									className="w-6 h-6"
									alt="icon"
								/>
								<span>Call Customer Service</span>
							</a>
						</div>
					</div>
				)}
			</section>
		</>
	);
};

export default CheckBooking;
