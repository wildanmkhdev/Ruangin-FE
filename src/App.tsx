import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import CityDetails from "./pages/CityDetails";
import Details from "./pages/Details";
import BookOffice from "./pages/BookOffice";
import SuccessBooking from "./pages/SuccessBooking";
import CheckBooking from "./pages/CheckBooking";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Browse></Browse>}></Route>
				<Route path="/office:slug" element={<Details></Details>}></Route>
				<Route
					path="/office:slug/book"
					element={<BookOffice></BookOffice>}></Route>
				<Route path="/city:slug" element={<CityDetails></CityDetails>}></Route>
				<Route
					path="/success-booking"
					element={<SuccessBooking></SuccessBooking>}></Route>
				<Route
					path="/check-booking"
					element={<CheckBooking></CheckBooking>}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
