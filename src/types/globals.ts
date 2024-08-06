import { ReactNode } from "react";

export type LayoutProps = {
	children: ReactNode;
};

export type RouteParams<T> = {
	params: T;
};

export type CountryRouteParams = {
	country: string;
};

export type CityRouteParams = {
	city: string;
};
