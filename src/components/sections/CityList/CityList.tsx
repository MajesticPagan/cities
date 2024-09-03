"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ICity } from "country-state-city";

import { CountryRouteParams } from "@/types/globals";

import { slugify } from "@/lib/utils";
import { Link } from "@/i18n/routing";

import {
	Alert,
	AlertDescription,
	AlertTitle,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui";

type CityListProps = {
	items?: ICity[];
};

const CityList = ({ items }: CityListProps) => {
	const { country } = useParams<CountryRouteParams>();
	const t = useTranslations("Components.CityList");

	if (!items) {
		return (
			<Alert>
				<AlertTitle>{t("notFound.title")}</AlertTitle>
				<AlertDescription>{t("notFound.text")}</AlertDescription>
			</Alert>
		);
	}

	return (
		<Card>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>{t("name")}</TableHead>
						<TableHead>{t("coordinates")}</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items.map((item) => (
						<TableRow key={item.name + item.countryCode}>
							<TableCell className="font-bold">
								<Link href={`${country}/${slugify(item.name)}`}>{item.name}</Link>
							</TableCell>
							<TableCell>
								{item.latitude}, {item.longitude}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
};

export default CityList;
