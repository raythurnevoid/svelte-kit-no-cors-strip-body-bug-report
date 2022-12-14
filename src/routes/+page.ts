// since there's no dynamic data here, we can prerender

import type { Load } from "@sveltejs/kit";

// it so that it gets served as a static asset in production
export const prerender = true;

export const load: Load = async (event) => {
	const response = await event.fetch('/test.json').then((r) => r.json());

	return {
		data: response
	}
}