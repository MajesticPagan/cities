import { LayoutProps } from "@/types/globals";

import { Header } from "@/components/elements";

export default function CountryLayout({ children }: LayoutProps) {
	return (
		<>
			<Header />

			<main className="flex-1 overflow-y-auto pt-6 md:pt-12">
				<div className="container">{children}</div>
			</main>
		</>
	);
}
