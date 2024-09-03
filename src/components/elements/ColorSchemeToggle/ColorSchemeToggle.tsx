"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui";

const ColorSchemeToggle = () => {
	const t = useTranslations("Components.ColorSchemeToggle");
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" title={t("label")} aria-label={t("label")}>
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>{t("light")}</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>{t("dark")}</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>{t("system")}</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ColorSchemeToggle;
