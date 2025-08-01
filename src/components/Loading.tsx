const Loading = () => {
	return (
		<div className="flex items-center justify-center py-[30px] h-screen">
			<div className="text-center">
				{/* Main Spinner */}

				{/* Loading Text */}

				{/* Progress Dots */}
				<div className="flex justify-center space-x-2 mt-4">
					<div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
					<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
					<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
