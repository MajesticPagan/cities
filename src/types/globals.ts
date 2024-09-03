import { ReactNode } from "react";

export type LayoutProps = {
	children: ReactNode;
};

export type ErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export type RouteParams<T> = {
	params: T;
};

export type LocaleParams = {
	locale: string;
};

export type CountryRouteParams = {
	country: string;
};

export type CityRouteParams = {
	city: string;
};
