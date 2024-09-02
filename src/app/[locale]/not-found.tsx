import { useTranslations } from "next-intl";

import { Splash } from "@/components/sections";

export default function NotFoundPage() {
	const t = useTranslations("Pages.NotFound");

	return (
		<Splash
			status={404}
			title={t("title")}
			text={t("text")}
		>
			<Splash.Link href="/" />
		</Splash>
	);
}
