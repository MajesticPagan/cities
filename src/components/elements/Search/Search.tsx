"use client";

import { ButtonHTMLAttributes, useCallback, useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Check, Search as SearchIcon } from "lucide-react";
import { Country, ICountry } from "country-state-city";

import { cn, slugify } from "@/lib/utils";

import {
	Button,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui";

type SearchProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Search = ({ className, ...props }: SearchProps) => {
	const router = useRouter();
	const countries = Country.getAllCountries();
	const t = useTranslations("Components.Search");
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<ICountry>();

	const onSelect = useCallback(
		(selectedValue: string) => {
			let returnValue;

			if (selectedValue !== value?.name) {
				returnValue = countries.find((country) => selectedValue === country.name);
			}

			setValue(returnValue);
			setOpen(false);
		},
		[value, countries]
	);

	useEffect(() => {
		if (value?.name) {
			router.push("/" + slugify(value.name));
		}
	}, [value, router]);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className={cn("w-full max-w-md justify-between", className)}
					{...props}
				>
					{value
						? countries.find((country) => country.isoCode === value.isoCode)?.name
						: t("trigger")}
					<SearchIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-md p-0">
				<Command>
					<CommandInput placeholder={t("search")} />
					<CommandList>
						<CommandEmpty>{t("noResults")}</CommandEmpty>
						<CommandGroup>
							{countries.map((country) => (
								<CommandItem
									key={country.isoCode}
									value={country.name}
									onSelect={onSelect}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value?.isoCode === country.isoCode
												? "opacity-100"
												: "opacity-0"
										)}
									/>
									{country.name}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default Search;
