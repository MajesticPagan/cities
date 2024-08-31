import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { LocaleParams, RouteParams } from "@/types/globals";

import { Search } from "@/components/elements";
import { Splash } from "@/components/sections";

export default function Home({ params }: RouteParams<LocaleParams>) {
	unstable_setRequestLocale(params.locale);
	const t = useTranslations("Home");

	return (
		<Splash status={t("title")} title={t("subtitle")} text={t("text")}>
			<Search className="mt-6" />
		</Splash>
	);
}
