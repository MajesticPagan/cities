import { HTMLAttributes, useCallback } from "react";
import Image from "next/image";

import { Country } from "@/types/countries";

import { cn, slugify } from "@/lib/utils";
import { Link } from "@/i18n/routing";

import { Card, CardContent } from "@/components/ui";

type CountryListProps = {
	items: Country[];
	groupByRegion?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const CountryList = ({ items, groupByRegion = false, className, ...props }: CountryListProps) => {
	const groupCountriesByRegion = useCallback((countries: Country[]) => {
		return countries.reduce<Record<string, Country[]>>((acc, country) => {
			const region = country.region;

			if (!acc[region]) {
				acc[region] = [];
			}

			acc[region].push(country);

			return acc;
		}, {});
	}, []);

	const groupedItems = groupByRegion ? groupCountriesByRegion(items) : { All: items };

	return (
		<div className={cn("flex flex-col gap-6 md:gap-12", className)} {...props}>
			{Object.entries(groupedItems).map(([region, countries]) => (
				<div key={region}>
					{groupByRegion && <h2 className="mb-8">{region}</h2>}

					<div className="grid gap-4 md:grid-cols-4 md:gap-8">
						{countries.map((item) => (
							<Card key={item.name.common} asChild>
								<Link
									href={`/countries/${slugify(item.name.common)}`}
									title={item.name.official}
								>
									<CardContent className="p-4">
										<div className="flex items-center space-x-4">
											<div className="w-8 h-8 rounded overflow-hidden relative flex-shrink-0">
												<Image
													src={item.flags.png}
													alt={item.flags.alt}
													fill
													className="object-cover"
												/>
											</div>

											<h3 className="flex-grow max-w-full truncate text-lg font-semibold">
												{item.name.common}
											</h3>
										</div>
									</CardContent>
								</Link>
							</Card>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default CountryList;
