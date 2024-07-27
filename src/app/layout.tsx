import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { LayoutProps } from "@/types/globals";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/providers";

import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Cities",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
