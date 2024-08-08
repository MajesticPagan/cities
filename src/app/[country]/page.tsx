import Link from "next/link";
import { notFound } from "next/navigation";
import { City, Country } from "country-state-city";
import { Clock, Coins, Earth, Phone } from "lucide-react";

import { CountryPageParams, PageParams } from "@/types/globals";

import { slugify } from "@/lib/utils";
import { fetchCountryBySlug } from "@/lib/fetch";

import {
	Alert,
	AlertDescription,
	AlertTitle,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui";

export function generateStaticParams() {
	const countries = Country.getAllCountries();
	return countries.map((country) => ({ country: slugify(country.name) }));
}

export default function CountryPage({ params }: PageParams<CountryPageParams>) {
	const country = fetchCountryBySlug(params.country);

	if (!country) notFound();

	const cities = City.getCitiesOfCountry(country.isoCode);

	return (
		<>
			<h1 className="mb-8">{country.name}</h1>

			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mb-10">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">Currency</CardTitle>
						<Coins className="h-6 w-6" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{country.currency}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">Phone Code</CardTitle>
						<Phone className="h-6 w-6" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{`+${country.phonecode}`}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">Coordinates</CardTitle>
						<Earth className="h-6 w-6" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold truncate hover:whitespace-normal">
							{country.latitude}, {country.longitude}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground">
						<CardTitle className="text-sm font-medium">Active Now</CardTitle>
						<Clock className="h-6 w-6" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">+573</div>
					</CardContent>
				</Card>
			</div>

			<Card className="p-8">
				<h2 className="mb-6">Cities</h2>

				{cities ? (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>State</TableHead>
								<TableHead>Coordinates</TableHead>
								<TableHead></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{cities.map((city, index) => (
								<TableRow key={city.name + city.countryCode}>
									<TableCell className="font-bold">
										<Link href={`${params.country}/${slugify(city.name)}`}>{city.name}</Link>
									</TableCell>
									<TableCell>{city.stateCode}</TableCell>
									<TableCell>
										{city.latitude}, {city.longitude}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				) : (
					<Alert>
						<AlertTitle>No cities</AlertTitle>
						<AlertDescription>
							There are no entries available for this country.
						</AlertDescription>
					</Alert>
				)}
			</Card>
		</>
	);
}
