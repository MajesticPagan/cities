import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

type SplashProps = {
	status?: number;
	title: string;
	text?: string;
	link?: LinkProps & HTMLAttributes<HTMLAnchorElement>;
	linkText?: string;
};

const Splash = ({
	status,
	title,
	text,
	link = { href: "/" },
	linkText = "Go to home",
}: SplashProps) => (
	<div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
		<div className="mx-auto max-w-md text-center">
			{status && <div className="text-9xl font-bold text-primary">{status}</div>}

			<h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				{title}
			</h1>

			{text && <p className="mt-4 text-muted-foreground">{text}</p>}

			{link && (
				<div className="mt-6">
					<Link
						{...link}
						className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					>
						{linkText || link?.title}
					</Link>
				</div>
			)}
		</div>
	</div>
);

export default Splash;
