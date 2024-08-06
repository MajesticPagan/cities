import Link from "next/link";
import { Building, Settings } from "lucide-react";

import { ColorSchemeToggle } from "@/components/elements";
import { Button, Input } from "@/components/ui";

const Header = () => {
	return (
		<header className="flex flex-col">
			<div className="bg-background border-b flex items-center justify-between px-4 sm:px-6 h-14">
				<nav className="flex items-center gap-2">
					<Link href="#">
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

			<nav className="text-sm bg-muted/40 px-4 sm:px-6 border-b border-muted py-2">
				<ul className="flex gap-4 justify-start">
					<li>
						<Link href="#" className="text-secondary-foreground">
							Overview
						</Link>
					</li>
					<li>
						<Link href="#" className="text-secondary-foreground">
							Statistics
						</Link>
					</li>
					<li>
						<Link href="#" className="text-secondary-foreground">
							Weather
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
