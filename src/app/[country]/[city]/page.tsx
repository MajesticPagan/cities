import { CityPageParams, CountryPageParams, PageParams } from "@/types/globals";

export default function CityPage({ params }: PageParams<CountryPageParams & CityPageParams>) {
	console.log(params);
	return <div>{params.city}</div>;
}
