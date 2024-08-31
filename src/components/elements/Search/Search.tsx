"use client";

import { ButtonHTMLAttributes, useCallback, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Country, ICountry } from "country-state-city";

import { cn } from "@/lib/utils";

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
	const countries = Country.getAllCountries();
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<ICountry>();

	const onSelect = useCallback(
		(selectedValue: string) => {
			setValue(
				selectedValue !== value?.isoCode
					? countries.find((country) => country.isoCode === selectedValue)
					: undefined
			);
			setOpen(false);
		},
		[value]
	);

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
						: "Select country..."}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w- max-w-md p-0">
				<Command>
					<CommandInput placeholder="Search..." />
					<CommandList>
						<CommandEmpty>No country found.</CommandEmpty>
						<CommandGroup>
							{countries.map((country) => (
								<CommandItem
									key={country.isoCode}
									value={country.isoCode}
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
