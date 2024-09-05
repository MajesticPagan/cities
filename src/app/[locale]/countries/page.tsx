import { unstable_setRequestLocale } from "next-intl/server";

import { LocaleParams, RouteParams } from "@/types/globals";
import { Country } from "@/types/countries";

import { fetchCountries } from "@/lib/fetch";

import { Splash } from "@/components/sections";
import { CountryList } from "@/components/elements";

export default async function CountriesPage({ params }: RouteParams<LocaleParams>) {
	unstable_setRequestLocale(params.locale);
	const countries: Country[] = await fetchCountries("all");

	return <CountryList items={countries} />;
}
