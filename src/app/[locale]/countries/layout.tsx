import { unstable_setRequestLocale } from "next-intl/server";

import { LayoutProps, LocaleParams, RouteParams } from "@/types/globals";

import { Header } from "@/components/elements";

export default function CountriesLayout({
	children,
	params,
}: LayoutProps & RouteParams<LocaleParams>) {
	unstable_setRequestLocale(params.locale);

	return (
		<>
			<Header />

			<main className="flex-1 overflow-y-auto">
				<div className="container">{children}</div>
			</main>
		</>
	);
}
