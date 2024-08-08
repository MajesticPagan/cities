import { Country } from "country-state-city";

import { slugify } from "@/lib/utils";

export function fetchCountryBySlug(slug: string) {
	const countries = Country.getAllCountries();
	return countries.find((country) => slugify(country.name) === slug);
}
