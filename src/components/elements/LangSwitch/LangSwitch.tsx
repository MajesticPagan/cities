"use client";

import { useLocale, useTranslations } from "next-intl";

import { routing, usePathname, useRouter } from "@/i18n/routing";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";

const LangSwitch = () => {
	const locale = useLocale();
	const t = useTranslations("Components.LangSwitch");
	const router = useRouter();
	const pathname = usePathname();

	function handleValueChange(value: string) {
		router.replace(pathname, { locale: value as typeof routing.defaultLocale });
	}

	return (
		<Select defaultValue={locale} onValueChange={handleValueChange}>
			<SelectTrigger className="w-[125px]">
				<SelectValue placeholder={t("placeholder")} />
			</SelectTrigger>

			<SelectContent>
				{routing.locales.map((lcl) => (
					<SelectItem key={lcl} value={lcl}>
						{t("label", { locale: lcl })}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default LangSwitch;
