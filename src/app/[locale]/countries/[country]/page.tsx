import { unstable_setRequestLocale } from "next-intl/server";

import { CountryRouteParams, LocaleParams, RouteParams } from "@/types/globals";
import { Country } from "@/types/countries";

import { slugify } from "@/lib/utils";
import { fetchCountries } from "@/lib/fetch";

export async function generateStaticParams() {
	const countries: Country[] = await fetchCountries("all");
	return countries.map((country) => ({ country: slugify(country.name.common) }));
}

export default function CountryPage({ params }: RouteParams<LocaleParams & CountryRouteParams>) {
	unstable_setRequestLocale(params.locale);

	return (
		<>
			<h1 className="mb-8 text-center">{params.country}</h1>
		</>
	);
}
