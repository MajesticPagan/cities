import Link from "next/link";
import { Building, Settings } from "lucide-react";

import { ColorSchemeToggle, Search } from "@/components/elements";
import { Button } from "@/components/ui";

const Header = () => {
	return (
		<header className="flex flex-col">
			<div className="bg-background border-b">
				<div className="container flex items-center justify-between h-14">
					<nav className="flex items-center gap-2">
						<Link href="/">
							<Building className="h-6 w-6" />
							<span className="sr-only">Cities</span>
						</Link>
					</nav>

					<Search className="flex-1" />

					<div className="flex items-center gap-2">
						<Button variant="outline" size="icon">
							<Settings className="h-5 w-5" />
							<span className="sr-only">Settings</span>
						</Button>

						<ColorSchemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
