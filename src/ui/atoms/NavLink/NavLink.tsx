"use client";
import { type UrlObject } from "url";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const NavLink = ({ href, children }: { href: UrlObject; children: ReactNode }) => {
	const currentPathname = usePathname();
	const isActive = currentPathname === href.href;
	return (
		<Link
			className={twMerge("text-blue-900 hover:text-blue-950", isActive && "underline")}
			href={href}
		>
			{children}
		</Link>
	);
};
