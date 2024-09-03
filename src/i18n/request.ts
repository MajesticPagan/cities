import { notFound } from "next/navigation";
import { IntlErrorCode } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!routing.locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`./dictionary/${locale}.json`)).default,
		onError(error) {
			console.log(error);
		},
		getMessageFallback({ namespace, key, error }) {
			const path = [namespace, key].filter((part) => part != null).join(".");

			if (error.code === IntlErrorCode.MISSING_MESSAGE) {
				return path + " is not yet translated";
			} else {
				return "Dear developer, please fix this message: " + path;
			}
		},
	};
});
