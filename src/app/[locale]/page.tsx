import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { LocaleParams, RouteParams } from "@/types/globals";

import { Search } from "@/components/elements";
import { Splash } from "@/components/sections";

export default function Home({ params }: RouteParams<LocaleParams>) {
	unstable_setRequestLocale(params.locale);
	const tGlobal = useTranslations("Global");
	const tHome = useTranslations("Pages.Home");

	return (
		<Splash status={tGlobal("siteName")} title={tHome("title")} text={tHome("text")}>
			<Search className="mt-6" />
		</Splash>
	);
}
