import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
	return new Response(JSON.stringify({
		success: true,
		data: {
			name: "Lucas",
			age: 26,
			role: "Software Engineer",
			address: {
				state: "BA",
				zipcode: "40353240",
				city: "Salvador",
				street: "Avenida Aristóteles",
				number: undefined,
				complement: undefined,
			}
		}
	}));
}