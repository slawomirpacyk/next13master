import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavLink } from "@/ui/atoms/NavLink/NavLink";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul className="flex justify-center gap-8 py-3">
						<li>
							<NavLink href="/">Home</NavLink>
						</li>
						<li>
							<NavLink href="/products">All</NavLink>
						</li>
					</ul>
				</nav>
				<main className="flex flex-col items-center justify-between bg-white p-24">{children}</main>
				<footer className="flex h-24 w-full items-center justify-center bg-gray-100">
					<p className="text-gray-500">© {new Date().getFullYear()} NEXT.JS Masters</p>
				</footer>
			</body>
		</html>
	);
}
