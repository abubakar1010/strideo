"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavbarDemo() {
	return (
		<div className="relative w-full flex items-center justify-center">
			<Navbar className="top-8" />
		</div>
	);
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn("fixed  top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
		>
			<Menu  setActive={setActive}>
				<HoveredLink href="/">Home</HoveredLink>
				<MenuItem setActive={setActive} active={active} item=" Featured">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/web-dev">New Arrival</HoveredLink>
						<HoveredLink href="/interface-design">Best Sellers</HoveredLink>
						<HoveredLink href="/seo">Members Exclusive</HoveredLink>
						<HoveredLink href="/branding">What's Trending</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Products">
					<div className="  text-sm grid grid-cols-2 gap-10 p-4">
						<HoveredLink href="/men">Men</HoveredLink>
						<HoveredLink href="/women">Women</HoveredLink>
						<HoveredLink href="/kid">Kid</HoveredLink>
					</div>
				</MenuItem>
				<Link href={"/contact"}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Contact"
					></MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
