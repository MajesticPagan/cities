import { ReactNode } from "react";

export type LayoutProps = {
	children: ReactNode;
};

export type ErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export type PageParams<T> = {
	params: T;
};

export type CountryPageParams = {
	country: string;
};

export type CityPageParams = {
	city: string;
};
