import { useTranslations } from "next-intl";
import { Building } from "lucide-react";

import { Link } from "@/i18n/routing";

import { ColorSchemeToggle, Search, LangSwitch } from "@/components/elements";

const Header = () => {
	const t = useTranslations("Global");

	return (
		<header className="flex flex-col">
			<div className="bg-background border-b">
				<div className="container flex items-center justify-between h-14">
					<nav className="flex items-center gap-2">
						<Link href="/" className="inline-flex items-center">
							<Building className="h-6 w-6" />
							<span className="font-bold ml-2">{t("siteName")}</span>
						</Link>
					</nav>

					<Search className="flex-1" />

					<div className="flex items-center gap-2">
						<LangSwitch />

						<ColorSchemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
