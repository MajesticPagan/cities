"use client";

import { ErrorProps } from "@/types/globals";

import { Splash } from "@/components/sections";

export default function ErrorPage({ error, reset }: ErrorProps) {
	const text =
		error?.message || "Please contact the admin for further details or try again later.";

	return (
		<Splash
			title="Something went wrong"
			text={text}
			link={{ href: "#", onClick: () => reset() }}
			linkText="Try again"
		/>
	);
}
