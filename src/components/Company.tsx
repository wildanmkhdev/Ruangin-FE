const Company = () => {
	return (
		<div>
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
		</div>
	);
};

export default Company;
