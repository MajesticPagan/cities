import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { FC, HTMLAttributes } from "react";

type SplashProps = {
	status?: string | number;
	title: string;
	text?: string;
} & HTMLAttributes<HTMLDivElement>;

type SplashComponent = {
	Link: SplashLinkComponent;
} & FC<SplashProps>;

type SplashLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement>;

type SplashLinkComponent = FC<SplashLinkProps>;

const Splash: SplashComponent = ({ status, title, text, className, children, ...props }) => (
	<section
		className={cn(
			"flex min-h-full flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8",
			className
		)}
		{...props}
	>
		<div className="mx-auto max-w-xl text-center">
			{status && <div className="text-9xl font-bold text-primary">{status}</div>}

			<h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				{title}
			</h1>

			{text && <p className="mt-4 text-muted-foreground">{text}</p>}

			{children}
		</div>
	</section>
);

const SplashLink: SplashLinkComponent = ({ children = "Go to home", className, ...props }) => (
	<Link
		className={cn(
			"inline-flex items-center rounded-md bg-primary px-4 py-2 mt-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
			className
		)}
		{...props}
	>
		{children}
	</Link>
);
Splash.Link = SplashLink;

export default Splash;
