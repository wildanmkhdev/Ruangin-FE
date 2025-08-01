// kalau expoert bisa di pakai semua halaman kala tidakhana internal saja

export interface Office {
	id: number;
	price: number;
	duration: number;
	name: string;
	slug: string;
	address: string;
	city: City;
	// kenapa type nya City ini ambil dari interface yg udh dibuat sebelmny dari city di bawah
	thumbnail: string;
	photos: Photo[];
	// kenapa pakai [] karena datanya lebih dari 1
	benefits: Benefit[];
	about: string;
}

interface Photo {
	id: number;
	photo: string;
}

interface Benefit {
	id: number;
	name: string;
}

export interface City {
	id: number;
	name: string;
	slug: string;
	photo: string;
	officeSpaces_count: number;
	officeSpaces: Office[];
	// kenapa juga pakai [] karen akita bisa punya lebih data office
}

export interface BookingDetails {
	id: number;
	name: string;
	phone_number: string;
	booking_trx_id: string;
	is_paid: boolean;
	duration: number;
	total_amount: number;
	started_at: string;
	ended_at: string;
	office: Office;
}
