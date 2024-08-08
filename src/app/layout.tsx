import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { LayoutProps } from "@/types/globals";

import { cn } from "@/lib/utils";

import { Header } from "@/components/elements";
import { ThemeProvider } from "@/components/providers";

import "@/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Cities",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={cn("h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex flex-col h-full">
						<Header />

						<main className="flex-1 overflow-y-auto pt-6 md:pt-12">
							<div className="container">{children}</div>
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
