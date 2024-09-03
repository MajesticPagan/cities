import { CityRouteParams, CountryRouteParams, RouteParams } from "@/types/globals";

export default function CityPage({ params }: RouteParams<CountryRouteParams & CityRouteParams>) {
	console.log(params.country);
	return <div>{params.city}</div>;
}
