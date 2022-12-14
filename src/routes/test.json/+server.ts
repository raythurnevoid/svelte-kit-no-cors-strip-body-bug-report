import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async (event) => {
	// replacing with plain fetch(...) will work
	const response = await event.fetch('https://dummyjson.com/products/add', {
		method: 'POST',
		mode: 'no-cors',
	}).then((r) => r.json());

	return new Response(JSON.stringify(response), {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}