import { Splash } from "@/components/sections";

export default function NotFoundPage() {
	return (
		<Splash
			status={404}
			title="Page not found"
			text="The page you are looking for does not exist or has been moved."
		>
			<Splash.Link href="/" />
		</Splash>
	);
}
