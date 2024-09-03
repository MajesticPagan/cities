import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale, getMessages } from "next-intl/server";

import { LayoutProps, LocaleParams, RouteParams } from "@/types/globals";

import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";

import { ThemeProvider } from "@/components/providers";

import "@/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Cities",
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: LayoutProps & RouteParams<LocaleParams>) {
	unstable_setRequestLocale(params.locale);
	const messages = await getMessages();

	return (
		<html lang={params.locale}>
			<body className={cn("h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div className="flex flex-col h-full">{children}</div>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
