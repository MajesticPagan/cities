import Link from "next/link";
import { Building, Settings } from "lucide-react";

import { ColorSchemeToggle } from "@/components/elements";
import { Button, Input } from "@/components/ui";

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

					<div className="relative flex-1 max-w-md">
						<div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

						<Input
							type="search"
							placeholder="Search..."
							className="w-full rounded-lg bg-background pl-8"
						/>
					</div>

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
