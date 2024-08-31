import { Search } from "@/components/elements";
import { Splash } from "@/components/sections";

export default function Home() {
	return (
		<Splash
			status="Cities"
			title="Find any city at your fingertips"
			text="Search, discover, and explore cities across the globe with ease. Start your journey now!"
		>
			<Search className="mt-6" />
		</Splash>
	);
}
