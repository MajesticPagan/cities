import { unstable_setRequestLocale } from "next-intl/server";

import { CityRouteParams, CountryRouteParams, LocaleParams, RouteParams } from "@/types/globals";

export default function CityPage({
	params,
}: RouteParams<LocaleParams & CountryRouteParams & CityRouteParams>) {
	unstable_setRequestLocale(params.locale);

	return <div>{params.city}</div>;
}
