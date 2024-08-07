import { notFound } from "next/navigation";
import { Country } from "country-state-city";
import { Clock, Coins, Earth, Phone } from "lucide-react";

import { CountryPageParams, PageParams } from "@/types/globals";

import { slugify } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

function fetchCountryData(slug: string) {
	const countries = Country.getAllCountries();
	return countries.find((country) => slugify(country.name) === slug);
}

export function generateStaticParams() {
	const countries = Country.getAllCountries();
	return countries.map((country) => ({ country: slugify(country.name) }));
}

export default function CountryPage({ params }: PageParams<CountryPageParams>) {
	const country = fetchCountryData(params.country);

	if (!country) notFound();

	console.log(country);

	return (
		<>
			<h1 className="mb-8">{country.name}</h1>

			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">Currency</CardTitle>
						<Coins className="h-4 w-4" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{country.currency}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">Phone Code</CardTitle>
						<Phone className="h-4 w-4" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{`+${country.phonecode}`}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">LAT/LNG</CardTitle>
						<Earth className="h-4 w-4" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{country.latitude}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">Active Now</CardTitle>
						<Clock className="h-4 w-4" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">+573</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
