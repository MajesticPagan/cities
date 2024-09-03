import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { City, Country } from "country-state-city";
import { Coins, Earth, Phone } from "lucide-react";

import { CountryRouteParams, RouteParams } from "@/types/globals";

import { slugify } from "@/lib/utils";
import { fetchCountryBySlug } from "@/lib/fetch";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { CityList } from "@/components/sections";

export function generateStaticParams() {
	const countries = Country.getAllCountries();
	return countries.map((country) => ({ country: slugify(country.name) }));
}

export default function CountryPage({ params }: RouteParams<CountryRouteParams>) {
	const t = useTranslations("Pages.Country");
	const country = fetchCountryBySlug(params.country);

	if (!country) notFound();

	const cities = City.getCitiesOfCountry(country.isoCode);

	return (
		<>
			<h1 className="mb-8">{country.name}</h1>

			<CityList items={cities} />

			<div className="grid gap-4 md:grid-cols-3 md:gap-8 mb-10">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">{t("Stats.currency")}</CardTitle>
						<Coins className="h-6 w-6" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{country.currency}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">{t("Stats.phone")}</CardTitle>
						<Phone className="h-6 w-6" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{`+${country.phonecode}`}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">
							{t("Stats.coordinates")}
						</CardTitle>
						<Earth className="h-6 w-6" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold truncate hover:whitespace-normal">
							{country.latitude}, {country.longitude}
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
