"use client";

import { useTranslations } from "next-intl";

import { ErrorProps } from "@/types/globals";

import { Splash } from "@/components/sections";

export default function ErrorPage({ error, reset }: ErrorProps) {
	const t = useTranslations("Pages.Error");
	const text =
		error?.message || t("text");

	return (
		<Splash title={t("title")} text={text}>
			<Splash.Link href="#" onClick={() => reset()} />
		</Splash>
	);
}
