import { z } from "zod";
export const bookingSchema = z.object({
	name: z.string().min(1, "name is rquired"),
	phone_number: z.string().min(1, "phone is required"),
	started_at: z
		.string()
		.refine((date) => !isNaN(Date.parse(date)), "invdalide date"),
	office_space_id: z.number().min(1, "office if is rquired"),
});
export const viewBookingSchema = z.object({
	booking_trx_id: z.string().min(1, "booking trx is required"),
	phone_number: z.string().min(1, "phone number is required"),
});
