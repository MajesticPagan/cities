import { Country } from "country-state-city";

import { slugify } from "@/lib/utils";

export function fetchCountryBySlug(slug: string) {
	const countries = Country.getAllCountries();
	return countries.find((country) => slugify(country.name) === slug);
}

export async function fetchApi(url: string, endpoint: string) {
	const response = await fetch(`${url}/${endpoint}`, {
		next: { revalidate: 3600 },
	});

	if (!response.ok) {
		throw new Error("Failed to fetch data. Please try again later.");
	}

	return response.json();
}

export async function fetchCountries(endpoint: string) {
	return await fetchApi("https://restcountries.com/v3.1", endpoint);
}
